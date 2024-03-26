import { Module } from '@nestjs/common';
import { CreatePurchaseService } from './create-purchase.service';
import { CreatePurchaseController } from './create-purchase.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CreatePurchaseController],
  providers: [CreatePurchaseService, PrismaService],
})
export class CreatePurchaseModule {}
