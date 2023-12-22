import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CategoriesService {
  async getAllCategories() {
    try {
      const categories = await prisma.category.findMany();
      return { categories };
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }

  async createCategory(categoryData: { name: string; description?: string }) {
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

  async deleteCategory(id: number) {
    try {
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
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }
}
