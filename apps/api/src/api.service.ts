import { Injectable } from '@nestjs/common';
import { UrlRepository } from '@app/database/entities/url';
import { CreateShortUrlUseCase } from '@app/application/usecases/create-short-url.usecase';
import { GetOriginalUrlUseCase } from '@app/application/usecases/get-original-url.usecase';

@Injectable()
export class ApiService {
  private readonly createShortUrlUseCase: CreateShortUrlUseCase;
  private readonly getOriginalUrlUseCase: GetOriginalUrlUseCase;

  constructor(private readonly urlRepository: UrlRepository) {
    this.createShortUrlUseCase = new CreateShortUrlUseCase(this.urlRepository);
    this.getOriginalUrlUseCase = new GetOriginalUrlUseCase(this.urlRepository);
  }

  async createShortUrl(originalUrl: string) {
    console.log('Were here in the service');
    return this.createShortUrlUseCase.execute(originalUrl);
  }

  async getOriginalUrl(shortUrl: string) {
    return this.getOriginalUrlUseCase.execute(shortUrl);
  }
}
