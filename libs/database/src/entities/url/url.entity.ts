import {
  Entity,
  Property,
  PrimaryKey,
  EntityRepositoryType,
} from '@mikro-orm/core';
import { BaseEntity } from '../base.entity';
import { IUrlEntity } from '@app/domain/entities/url.entity';
import { UrlRepository } from '@app/database/entities/url/url.repository';

const EntityCollectionName = 'urls';

@Entity({ collection: EntityCollectionName, repository: () => UrlRepository })
export class Url extends BaseEntity implements IUrlEntity {
  [EntityRepositoryType]?: UrlRepository;

  @PrimaryKey()
  shortUrl: string;

  @Property()
  originalUrl: string;
}
