import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class DetailProductService {
  constructor(private prisma: PrismaService) {}

  async detailProduct(id: string) {
    return await this.prisma.product.findFirst({ where: { id } });
  }
}
