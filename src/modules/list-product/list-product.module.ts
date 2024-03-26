import { Module } from '@nestjs/common';
import { ListProductService } from './list-product.service';
import { ListProductController } from './list-product.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ListProductController],
  providers: [ListProductService, PrismaService],
})
export class ListProductModule {}
