import { Controller, Get, Param } from '@nestjs/common';
import { ListThisProductService } from './list-this-product.service';

@Controller('list-this-product')
export class ListThisProductController {
  constructor(
    private readonly listThisProductService: ListThisProductService,
  ) {}

  @Get(':categoryId')
  async listThisProductController(@Param('categoryId') categoryId: string) {
    return this.listThisProductService.listThisProduct(categoryId);
  }
}
