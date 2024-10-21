import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { DatabaseModule } from '@app/database';
import { ConfigModule } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Url } from '@app/database/entities/url';
import { ApiService } from './api.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      cache: true,
    }),
    DatabaseModule,
    MikroOrmModule.forFeature([Url]),
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
