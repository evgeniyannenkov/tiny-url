import { PostgresUrlRepository } from '../../infrastructure/repositories/postgres-url.repository';

export const UrlRepositoryToken = 'UrlRepository';

export const RepositoryProvider = {
  provide: UrlRepositoryToken,
  useClass: PostgresUrlRepository,
};
