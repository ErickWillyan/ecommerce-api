import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class CreateCategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(data: Prisma.categoryCreateInput) {
    const category = this.prisma.category.create({
      data,
    });
    return category;
  }
}
