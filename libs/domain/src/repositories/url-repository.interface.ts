import { IUrlEntity } from '../entities/url.entity';

export interface IUrlRepository {
  save(url: IUrlEntity): Promise<void>;
  findByShortUrl(shortUrl: string): Promise<IUrlEntity | null>;
}
