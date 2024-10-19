import { UrlEntity } from '../entities/url.entity';

export interface IUrlRepository {
  create(url: UrlEntity): Promise<void>;
  findByShortUrl(shortUrl: string): Promise<UrlEntity | null>;
}
