import { Module } from '@nestjs/common';
import { CreateCategoryModule } from './modules/create-category/create-category.module';
import { CreateProductModule } from './modules/create-product/create-product.module';
import { ListProductModule } from './modules/list-product/list-product.module';
import { ListThisProductModule } from './modules/list-this-product/list-this-product.module';

@Module({
  imports: [
    CreateCategoryModule,
    CreateProductModule,
    ListProductModule,
    ListThisProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
