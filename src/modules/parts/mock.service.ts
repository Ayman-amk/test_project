import { Injectable } from '@nestjs/common';

@Injectable()
export class MockService {
  private readonly parts = [
    {
      part_id: 1,
      name: 'Engine Oil',
      description: 'a powerful engine oil',
      brand: 'OilMaster',
      category_id: 1,
      subcategory_id: 1,
      seller_id: 1,
      price: 10.99,
      stock_quantity: 100,
      condition: 'New',
      manufacturing_year: 2022,
      shipping_cost: 5.99,
      is_promoted: false,
      created_at: '2023-12-08T00:00:00.000Z',
      updated_at: '2023-12-08T00:00:00.000Z',
    },
    {
      part_id: 2,
      name: 'Brake Pads',
      description: 'high-performance brake pads',
      brand: 'BrakeMasters',
      category_id: 2,
      subcategory_id: 1,
      seller_id: 2,
      price: 24.99,
      stock_quantity: 75,
      condition: 'New',
      manufacturing_year: 2023,
      shipping_cost: 7.99,
      is_promoted: true,
      created_at: '2023-12-08T12:30:00.000Z',
      updated_at: '2023-12-08T12:30:00.000Z',
    },
    {
      part_id: 3,
      name: 'Car Battery',
      description: 'reliable car battery',
      brand: 'PowerCell',
      category_id: 3,
      subcategory_id: 2,
      seller_id: 3,
      price: 89.99,
      stock_quantity: 50,
      condition: 'New',
      manufacturing_year: 2023,
      shipping_cost: 12.99,
      is_promoted: false,
      created_at: '2023-12-08T15:45:00.000Z',
      updated_at: '2023-12-08T15:45:00.000Z',
    },
    {
      part_id: 4,
      name: 'Spark Plugs',
      description: 'high-quality spark plugs',
      brand: 'IgnitePro',
      category_id: 1,
      subcategory_id: 3,
      seller_id: 4,
      price: 7.49,
      stock_quantity: 120,
      condition: 'New',
      manufacturing_year: 2023,
      shipping_cost: 4.99,
      is_promoted: true,
      created_at: '2023-12-08T18:15:00.000Z',
      updated_at: '2023-12-08T18:15:00.000Z',
    },
    {
      part_id: 5,
      name: 'Air Filter',
      description: 'efficient air filter',
      brand: 'CleanAir',
      category_id: 2,
      subcategory_id: 2,
      seller_id: 1,
      price: 12.99,
      stock_quantity: 90,
      condition: 'New',
      manufacturing_year: 2023,
      shipping_cost: 6.99,
      is_promoted: false,
      created_at: '2023-12-08T21:00:00.000Z',
      updated_at: '2023-12-08T21:00:00.000Z',
    },
  ];

  getAllParts() {
    return this.parts;
  }

  getPartById(id: number) {
    return this.parts.find((part) => part.part_id === id);
  }

  getPartsByCategory(categoryId: number) {
    return this.parts.filter((part) => part.category_id === categoryId);
  }

  createPart(newPart: any) {
    const partId = this.parts.length + 1;

    const createdPart = {
      part_id: partId,
      ...newPart,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    this.parts.push(createdPart);

    return createdPart;
  }

  deletePart(id: number) {
    const index = this.parts.findIndex((part) => part.part_id === id);

    if (index !== -1) {
      const deletedPart = this.parts.splice(index, 1)[0];
      return deletedPart;
    }

    return null;
  }
}
