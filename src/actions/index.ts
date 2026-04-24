import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro/zod';
import { sendContactEmail } from '../lib/mailer';
import { checkRateLimit } from '../lib/rate-limit';
import { getCurrentLocale } from '../i18n/utils';
import { home } from '../i18n/translations/home';

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      lang: z.string().optional(),
      name: z
        .string('name:required')
        .min(1, 'name:required')
        .min(2, 'name:min')
        .max(100, 'name:max'),
      email: z.email('email:invalid'),
      message: z
        .string('message:required')
        .min(1, 'message:required')
        .min(10, 'message:min')
        .max(5000, 'message:max'),
    }),
    handler: async ({ lang, name, email, message }, context) => {
      const t = home[getCurrentLocale(lang)];

      await checkRateLimit(context.clientAddress, {
        key: 'contact',
        limit: 3,
        windowSeconds: 60 * 5,
        message: t.form.error.ratelimit,
      });

      try {
        await sendContactEmail({ name, email, message });
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: t.form.error.server,
        });
      }

      return { success: true };
    },
  }),
};
