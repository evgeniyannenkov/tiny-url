import { MongoDriver } from '@mikro-orm/mongodb';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'test' ? ['.env.test.local'] : ['.env'],
      cache: true,
      expandVariables: true,
    }),
    MikroOrmModule.forRoot({
      autoLoadEntities: true,
      dbName:
        process.env.NODE_ENV === 'test'
          ? (globalThis as any).__MONGO_DB_NAME__
          : process.env.DB_NAME!,
      clientUrl:
        process.env.NODE_ENV === 'test'
          ? (globalThis as any).__MONGO_URI__
          : process.env.DB_URI!,
      driver: MongoDriver,
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
