import { Controller, Get, Param } from '@nestjs/common';
import { DetailProductService } from './detail-product.service';

@Controller('detail-product')
export class DetailProductController {
  constructor(private readonly detailProductService: DetailProductService) {}

  @Get(':id')
  async detailProductController(@Param('id') id: string) {
    return await this.detailProductService.detailProduct(id);
  }
}
