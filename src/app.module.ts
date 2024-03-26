import { Module } from '@nestjs/common';
import { CreateCategoryModule } from './modules/create-category/create-category.module';
import { CreateProductModule } from './modules/create-product/create-product.module';
import { ListProductModule } from './modules/list-product/list-product.module';
import { ListThisProductModule } from './modules/list-this-product/list-this-product.module';
import { CreateItemShoppingListModule } from './modules/create-item-shopping-list/create-item-shopping-list.module';
import { CreatePurchaseModule } from './modules/create-purchase/create-purchase.module';
import { DetailProductModule } from './modules/detail-product/detail-product.module';

@Module({
  imports: [
    CreateCategoryModule,
    CreateProductModule,
    ListProductModule,
    ListThisProductModule,
    CreateItemShoppingListModule,
    CreatePurchaseModule,
    DetailProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
