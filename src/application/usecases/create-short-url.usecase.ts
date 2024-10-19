import { IUrlRepository } from '../../domain/repositories/url-repository.interface';
import { UrlEntity } from '../../domain/entities/url.entity';
import { init, createId } from '@paralleldrive/cuid2';

export class CreateShortUrlUseCase {
  constructor(private readonly urlRepository: IUrlRepository) {}

  async execute(originalUrl: string): Promise<UrlEntity> {
    const generateShortId = init({ length: 7 });
    const shortUrl = generateShortId();

    const urlEntity = new UrlEntity(
      createId(),
      originalUrl,
      shortUrl,
      new Date(),
    );

    await this.urlRepository.create(urlEntity);

    return urlEntity;
  }
}
