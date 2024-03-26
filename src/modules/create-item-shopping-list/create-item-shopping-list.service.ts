import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class CreateItemShoppingListService {
  constructor(private prisma: PrismaService) {}

  async createItemShoppingList(data: Prisma.shoppingListCreateInput) {
    const shoppingListItem = await this.prisma.shoppingList.create({ data });

    return shoppingListItem;
  }
}
