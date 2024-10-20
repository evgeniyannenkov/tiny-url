import { Entity, Property, PrimaryKey } from '@mikro-orm/core';
import { BaseEntity } from '../base.entity';
import { IUrlEntity } from '@app/domain/entities/url.entity';
import { UrlRepository } from '@app/database/entities/url/url.repository';

const EntityCollectionName = 'urls';

@Entity({ collection: EntityCollectionName, repository: () => UrlRepository })
export class UrlEntity extends BaseEntity implements IUrlEntity {
  @PrimaryKey()
  shortUrl: string;

  @Property()
  originalUrl: string;
}
