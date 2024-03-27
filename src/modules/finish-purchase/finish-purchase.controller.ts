import { Body, Controller, Param, Put } from "@nestjs/common";
import { FinishPurchaseService } from "./finish-purchase.service";
import { Prisma } from "@prisma/client";

@Controller("finish-purchase")
export class FinishPurchaseController {
  constructor(private readonly finishPurchaseService: FinishPurchaseService) {}

  @Put(":id")
  async finishPurchaseController(
    @Param("id") id: string,
    @Body() data: Prisma.purchaseCreateInput
  ) {
    return await this.finishPurchaseService.createPurchase(id, data);
  }
}
