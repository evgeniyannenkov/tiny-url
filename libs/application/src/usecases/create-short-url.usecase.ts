import { IUrlRepository } from '@app/domain/repositories/url-repository.interface';
import { IUrlEntity } from '@app/domain/entities/url.entity';
import { init } from '@paralleldrive/cuid2';

export class CreateShortUrlUseCase {
  constructor(private readonly urlRepository: IUrlRepository) {}

  async execute(originalUrl: string): Promise<IUrlEntity> {
    const shortUrl = init({ length: 7 })();

    const urlEntity: IUrlEntity = {
      originalUrl,
      shortUrl,
    };

    await this.urlRepository.save(urlEntity);

    return urlEntity;
  }
}
