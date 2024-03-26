import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ListProductService {
  constructor(private prisma: PrismaService) {}

  async listProduct() {
    return this.prisma.product.findMany();
  }
}
