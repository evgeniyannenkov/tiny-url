import { Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { IBaseEntity } from '@app/domain/entities/base.entity';

export abstract class BaseEntity implements IBaseEntity {
  @PrimaryKey()
  _id: ObjectId;

  @Property({ type: 'timestamptz', onCreate: () => new Date() })
  createdAt: Date = new Date();

  @Property({ type: 'timestamptz', onUpdate: () => new Date(), nullable: true })
  updatedAt?: Opt<Date>;
}
