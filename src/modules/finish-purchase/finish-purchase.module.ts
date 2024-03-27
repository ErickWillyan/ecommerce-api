import { Module } from "@nestjs/common";
import { FinishPurchaseService } from "./finish-purchase.service";
import { FinishPurchaseController } from "./finish-purchase.controller";
import { PrismaService } from "src/database/PrismaService";

@Module({
  controllers: [FinishPurchaseController],
  providers: [FinishPurchaseService, PrismaService],
})
export class FinishPurchaseModule {}
