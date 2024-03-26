import { Body, Controller, Post } from '@nestjs/common';
import { CreateItemShoppingListService } from './create-item-shopping-list.service';
import { Prisma } from '@prisma/client';

@Controller('create-item-shopping-list')
export class CreateItemShoppingListController {
  constructor(
    private readonly createItemShoppingListService: CreateItemShoppingListService,
  ) {}

  @Post()
  async CreateItemShoppingListController(
    @Body() data: Prisma.shoppingListCreateInput,
  ) {
    return await this.createItemShoppingListService.createItemShoppingList(
      data,
    );
  }
}
