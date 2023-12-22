import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('categories')
export class CategoriesController {
  @Get()
  async getAllCategories() {
    const categories = await prisma.category.findMany();
    return { categories };
  }

  @Post()
  async createCategory(
    @Body() categoryData: { name: string; description?: string },
  ) {
    try {
      const createdCategory = await prisma.category.create({
        data: {
          name: categoryData.name,
          description: categoryData.description,
        },
      });

      return {
        message: 'Category created successfully',
        category: createdCategory,
      };
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }

  @Delete(':id')
  async deleteCategory(@Param('id', ParseIntPipe) id: number) {
    const deletedCategory = await prisma.category.delete({
      where: { category_id: id },
    });

    if (!deletedCategory) {
      return {
        message: 'Category not found',
        error: 'Not Found',
        statusCode: 404,
      };
    }

    return {
      message: 'Category deleted successfully',
      category: deletedCategory,
    };
  }
}
