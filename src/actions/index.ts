import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro/zod';
import { sendContactEmail } from '../lib/mailer';
import { checkRateLimit } from '../lib/rate-limit';

// TODO: Add logging system for better error tracking and debugging

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z
        .string('El nombre es requerido')
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .max(100, 'El nombre es demasiado largo'),
      email: z.email('Ingresa un correo electrónico válido'),
      message: z
        .string('El mensaje es requerido')
        .min(10, 'El mensaje debe tener al menos 10 caracteres')
        .max(2000, 'El mensaje es demasiado largo'),
    }),
    handler: async ({ name, email, message }, context) => {
      await checkRateLimit(context.clientAddress, {
        key: 'contact',
        limit: 3,
        windowSeconds: 60 * 5,
        message: 'Has alcanzado el límite de envíos. Por favor, inténtalo de nuevo en 5 minutos.',
      });

      try {
        await sendContactEmail({ name, email, message });
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
        });
      }

      return { success: true };
    },
  }),
};
