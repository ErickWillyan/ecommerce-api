import { Controller, Delete, Param } from "@nestjs/common";
import { DeleteItemShoppingListService } from "./delete-item-shopping-list.service";

@Controller("delete-item-shopping-list")
export class DeleteItemShoppingListController {
  constructor(
    private readonly deleteItemShoppingListService: DeleteItemShoppingListService
  ) {}
  @Delete(":id")
  async DeleteItemShoppingListController(@Param("id") id: string) {
    return await this.deleteItemShoppingListService.deleteItemShoppingList(id);
  }
}
