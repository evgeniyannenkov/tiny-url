import { Module } from '@nestjs/common';
import {
  RepositoryProvider,
  UrlRepositoryToken,
} from './providers/repository.provider';
import { CreateShortUrlUseCase } from '../application/usecases/create-short-url.usecase';
import { GetOriginalUrlUseCase } from '../application/usecases/get-original-url.usecase';
import { UrlController } from './controllers/url.controller';
import { IUrlRepository } from '../domain/repositories/url-repository.interface';

@Module({
  providers: [
    RepositoryProvider,
    {
      provide: CreateShortUrlUseCase,
      useFactory: (repository: IUrlRepository) =>
        new CreateShortUrlUseCase(repository),
      inject: [UrlRepositoryToken],
    },
    {
      provide: GetOriginalUrlUseCase,
      useFactory: (repository: IUrlRepository) =>
        new GetOriginalUrlUseCase(repository),
      inject: [UrlRepositoryToken],
    },
  ],
  controllers: [UrlController],
})
export class AppModule {}
