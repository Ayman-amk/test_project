import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryMockService {
  private readonly categories = [
    {
      category_id: 1,
      name: 'Engine Parts',
      description: 'Various parts for the engine',
      created_at: '2023-12-08T00:00:00.000Z',
      updated_at: '2023-12-08T00:00:00.000Z',
    },
    {
      category_id: 2,
      name: 'Brake System',
      description: 'Components for the braking system',
      created_at: '2023-12-08T12:30:00.000Z',
      updated_at: '2023-12-08T12:30:00.000Z',
    },
    {
      category_id: 3,
      name: 'Electrical Components',
      description: 'Various electrical parts',
      created_at: '2023-12-08T15:45:00.000Z',
      updated_at: '2023-12-08T15:45:00.000Z',
    },
    {
      category_id: 4,
      name: 'Exhaust System',
      description: "Parts for the vehicle's exhaust system",
      created_at: '2023-12-08T18:15:00.000Z',
      updated_at: '2023-12-08T18:15:00.000Z',
    },
    {
      category_id: 5,
      name: 'Air Filtration',
      description: 'Components for air filtration systems',
      created_at: '2023-12-08T21:00:00.000Z',
      updated_at: '2023-12-08T21:00:00.000Z',
    },
  ];

  getAllCategories() {
    return this.categories;
  }

  getCategoryById(id: number) {
    return this.categories.find((category) => category.category_id === id);
  }
}
