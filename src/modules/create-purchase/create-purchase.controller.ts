import { Body, Controller, Post } from '@nestjs/common';
import { CreatePurchaseService } from './create-purchase.service';
import { Prisma } from '@prisma/client';

@Controller('create-purchase')
export class CreatePurchaseController {
  constructor(private readonly createPurchaseService: CreatePurchaseService) {}

  @Post()
  async createPurchaseController(@Body() data: Prisma.purchaseCreateInput) {
    return this.createPurchaseService.createPurchase(data);
  }
}
