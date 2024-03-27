import { Module } from "@nestjs/common";
import { DeleteItemShoppingListService } from "./delete-item-shopping-list.service";
import { DeleteItemShoppingListController } from "./delete-item-shopping-list.controller";
import { PrismaService } from "src/database/PrismaService";

@Module({
  controllers: [DeleteItemShoppingListController],
  providers: [DeleteItemShoppingListService, PrismaService],
})
export class DeleteItemShoppingListModule {}
