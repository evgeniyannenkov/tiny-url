import { IUrlRepository } from '@app/domain/repositories/url-repository.interface';

export class GetOriginalUrlUseCase {
  constructor(private readonly urlRepository: IUrlRepository) {}

  async execute(shortUrl: string): Promise<string | null> {
    console.log('is url repository undefined?', this.urlRepository);
    const urlEntity = await this.urlRepository.findByShortUrl(shortUrl);
    console.log('urlEntity', urlEntity);
    if (!urlEntity) {
      return null;
    }
    return urlEntity.originalUrl;
  }
}
