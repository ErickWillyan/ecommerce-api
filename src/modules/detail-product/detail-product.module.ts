import { Module } from '@nestjs/common';
import { DetailProductService } from './detail-product.service';
import { DetailProductController } from './detail-product.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [DetailProductController],
  providers: [DetailProductService, PrismaService],
})
export class DetailProductModule {}
