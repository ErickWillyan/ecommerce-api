import { Module } from '@nestjs/common';
import { CreateItemShoppingListService } from './create-item-shopping-list.service';
import { CreateItemShoppingListController } from './create-item-shopping-list.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CreateItemShoppingListController],
  providers: [CreateItemShoppingListService, PrismaService],
})
export class CreateItemShoppingListModule {}
