import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ListThisProductService {
  constructor(private prisma: PrismaService) {}
  async listThisProduct(categoryId: string) {
    return this.prisma.product.findMany({
      where: { categoryId },
    });
  }
}
