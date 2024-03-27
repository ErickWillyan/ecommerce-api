import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/database/PrismaService";

@Injectable()
export class FinishPurchaseService {
  constructor(private prisma: PrismaService) {}

  async createPurchase(id: string, data: Prisma.purchaseCreateInput) {
    const purchase = await this.prisma.purchase.update({
      where: { id },
      data: {
        draft: true,
        totalPrice: data.totalPrice,
      },
    });

    return purchase;
  }
}
