import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class CreatePurchaseService {
  constructor(private prisma: PrismaService) {}

  async createPurchase(data: Prisma.purchaseCreateInput) {
    const purchase = await this.prisma.purchase.create({ data });

    return purchase;
  }
}
