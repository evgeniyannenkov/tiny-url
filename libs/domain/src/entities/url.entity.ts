import { IBaseEntity } from './base.entity';

export interface IUrlEntity extends IBaseEntity {
  originalUrl: string;
  shortUrl: string;
}
