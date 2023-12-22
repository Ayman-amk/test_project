import { Module } from '@nestjs/common';
import { PartsController } from './parts.controller';
import { PartsService } from './parts.service';
import { MockService } from './mock.service';

@Module({
  controllers: [PartsController],
  providers: [MockService],
})
export class PartsModule {}
