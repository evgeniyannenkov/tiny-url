import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateShortUrlUseCase } from '../../application/usecases/create-short-url.usecase';
import { GetOriginalUrlUseCase } from '../../application/usecases/get-original-url.usecase';

@Controller('url')
export class UrlController {
  constructor(
    private readonly createShortUrlUseCase: CreateShortUrlUseCase,
    private readonly getOriginalUrlUseCase: GetOriginalUrlUseCase,
  ) {}

  @Post('shorten')
  async createShortUrl(@Body('originalUrl') originalUrl: string) {
    const urlEntity = await this.createShortUrlUseCase.execute(originalUrl);
    return { shortUrl: urlEntity.shortUrl };
  }

  @Get(':shortUrl')
  async getOriginalUrl(@Param('shortUrl') shortUrl: string) {
    const originalUrl = await this.getOriginalUrlUseCase.execute(shortUrl);
    if (!originalUrl) {
      return { message: 'URL not found' };
    }
    return { originalUrl };
  }
}
