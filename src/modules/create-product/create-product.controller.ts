import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductService } from './create-product.service';
import { Prisma } from '@prisma/client';

@Controller('create-product')
export class CreateProductController {
  constructor(private readonly createProductService: CreateProductService) {}

  @Post()
  async createProductController(@Body() data: Prisma.productCreateInput) {
    return await this.createProductService.createProduct(data);
  }
}
