import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoryMockService } from './mock.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoryMockService],
})
export class CategoriesModule {}
