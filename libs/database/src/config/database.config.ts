import { validateConfig } from '@app/common/utils/config-validator.util';
import { registerAs } from '@nestjs/config';
import { z } from 'zod';

export const databaseConfigConfigSchema = z.object({
  dbName: z.string(),
  clientUrl: z.string(),
});

export const dbConfig = registerAs('dbConfig', () => ({
  dbName: process.env.DB_NAME,
  clientUrl: process.env.CLIENT_URL,
}));

export const validate = () =>
  validateConfig<DatabaseConfig>(dbConfig(), databaseConfigConfigSchema);

export type DatabaseConfig = z.infer<typeof databaseConfigConfigSchema>;
