import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { MockService } from './mock.service';

@Controller('parts')
export class PartsController {
  constructor(private readonly mockService: MockService) {}

  @Get()
  getAllParts() {
    const parts = this.mockService.getAllParts();
    return { parts };
  }

  @Get(':id')
  getPartById(@Param('id') id: string) {
    const partId = parseInt(id, 10);
    const part = this.mockService.getPartById(partId);

    if (!part) {
      return { message: 'Part not found', error: 'Not Found', statusCode: 404 };
    }

    return { part };
  }

  @Get('category/:categoryId')
  getPartsByCategory(@Param('categoryId', ParseIntPipe) categoryId: number) {
    const partsInCategory = this.mockService.getPartsByCategory(categoryId);

    if (!partsInCategory.length) {
      return {
        message: 'No parts found in the category',
        error: 'Not Found',
        statusCode: 404,
      };
    }

    return { parts: partsInCategory };
  }

  @Post()
  createPart(@Body() newPart: any) {
    const createdPart = this.mockService.createPart(newPart);

    return { part: createdPart };
  }

  @Delete(':id')
  deletePart(@Param('id', ParseIntPipe) id: number) {
    const deletedPart = this.mockService.deletePart(id);

    if (!deletedPart) {
      return { message: 'Part not found', error: 'Not Found', statusCode: 404 };
    }

    return { message: 'Part deleted successfully', part: deletedPart };
  }
}
