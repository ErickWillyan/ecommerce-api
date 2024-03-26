import { Controller, Get } from '@nestjs/common';
import { ListProductService } from './list-product.service';

@Controller('list-product')
export class ListProductController {
  constructor(private readonly listProductService: ListProductService) {}

  @Get()
  async listProductController() {
    return await this.listProductService.listProduct();
  }
}
