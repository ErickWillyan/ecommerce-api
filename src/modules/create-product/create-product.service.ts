import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class CreateProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: Prisma.productCreateInput) {
    const product = await this.prisma.product.create({ data });

    return product;
  }
}
