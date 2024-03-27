import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";

@Injectable()
export class DeleteItemShoppingListService {
  constructor(private prisma: PrismaService) {}
  async deleteItemShoppingList(id: string) {
    return await this.prisma.shoppingList.delete({ where: { id } });
  }
}
