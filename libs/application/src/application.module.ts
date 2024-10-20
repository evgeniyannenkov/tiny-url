import { Module } from '@nestjs/common';
import { DomainModule } from '@app/domain';

@Module({
  imports: [DomainModule],
})
export class ApplicationModule {}
