import { Module } from '@nestjs/common';
import { CreateProductService } from './create-product.service';
import { CreateProductController } from './create-product.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CreateProductController],
  providers: [CreateProductService, PrismaService],
})
export class CreateProductModule {}
