import { IUrlRepository } from '../../domain/repositories/url-repository.interface';

export class GetOriginalUrlUseCase {
  constructor(private readonly urlRepository: IUrlRepository) {}

  async execute(shortUrl: string): Promise<string | null> {
    const urlEntity = await this.urlRepository.findByShortUrl(shortUrl);
    if (!urlEntity) {
      return null;
    }
    return urlEntity.originalUrl;
  }
}
