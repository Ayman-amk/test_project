import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PartsService {
  async findAll() {
    return prisma.part.findMany();
  }
}
