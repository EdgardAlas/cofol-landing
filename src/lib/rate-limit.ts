import Redis from 'ioredis';
import { ActionError } from 'astro:actions';

const redis = new Redis(import.meta.env.REDIS_URL);

interface RateLimitOptions {
  key: string;
  limit: number;
  windowSeconds: number;
  message?: string;
}

export async function checkRateLimit(identifier: string, options: RateLimitOptions) {
  const { key, limit, windowSeconds, message } = options;
  const redisKey = `rate_limit:${key}:${identifier}`;
  const count = await redis.incr(redisKey);

  if (count === 1) {
    await redis.expire(redisKey, windowSeconds);
  }

  if (count > limit) {
    throw new ActionError({
      code: 'TOO_MANY_REQUESTS',
      message: message ?? 'Has alcanzado el límite de solicitudes. Por favor, inténtalo de nuevo más tarde.',
    });
  }
}
