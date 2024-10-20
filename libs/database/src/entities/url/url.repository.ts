import { UrlEntity } from '@app/database/entities/url/url.entity';
import { EntityRepository } from '@mikro-orm/mongodb';
import { IUrlRepository } from '@app/domain/repositories/url-repository.interface';

export class UrlRepository
  extends EntityRepository<UrlEntity>
  implements IUrlRepository
{
  async save(url: UrlEntity): Promise<void> {
    await this.getEntityManager().persistAndFlush(url);
  }

  async findByShortUrl(shortUrl: string): Promise<UrlEntity | null> {
    return this.findOne({ shortUrl });
  }
}
