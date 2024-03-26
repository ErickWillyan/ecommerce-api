import { Module } from '@nestjs/common';
import { ListThisProductService } from './list-this-product.service';
import { ListThisProductController } from './list-this-product.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ListThisProductController],
  providers: [ListThisProductService, PrismaService],
})
export class ListThisProductModule {}
