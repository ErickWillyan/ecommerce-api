import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryService } from './create-category.service';
import { Prisma } from '@prisma/client';

@Controller('create-category')
export class CreateCategoryController {
  constructor(private readonly createCategoryService: CreateCategoryService) {}

  @Post()
  async createCategoryController(@Body() data: Prisma.categoryCreateInput) {
    return await this.createCategoryService.createCategory(data);
  }
}
