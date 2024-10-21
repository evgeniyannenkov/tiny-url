import { Url } from '@app/database/entities/url/url.entity';
import { EntityRepository } from '@mikro-orm/mongodb';
import { IUrlRepository } from '@app/domain/repositories/url-repository.interface';

export class UrlRepository
  extends EntityRepository<Url>
  implements IUrlRepository
{
  async save(url: Url): Promise<void> {
    const forkedEm = this.em.fork();
    const record = new Url();
    record.originalUrl = url.originalUrl;
    record.shortUrl = url.shortUrl;
    await forkedEm.persistAndFlush(record);
  }

  async findByShortUrl(shortUrl: string): Promise<Url | null> {
    return this.findOne({ shortUrl });
  }
}
