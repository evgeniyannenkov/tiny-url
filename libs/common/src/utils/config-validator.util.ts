import { ZodSchema } from 'zod';

export function validateConfig<ConfigType>(
  config: Record<string, unknown>,
  schema: ZodSchema,
): ConfigType {
  const parsedConfig = schema.safeParse(config);
  if (!parsedConfig.success) {
    throw new Error(`Config validation error: ${parsedConfig.error.message}`);
  }
  return parsedConfig.data;
}
