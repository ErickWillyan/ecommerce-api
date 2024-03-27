import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";

@Injectable()
export class ListProductService {
  constructor(private prisma: PrismaService) {}

  async listProduct() {
    return await this.prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        categoryId: true,
        image: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });
  }
}
