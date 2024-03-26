import { Module } from '@nestjs/common';
import { CreateCategoryModule } from './modules/create-category/create-category.module';

@Module({
  imports: [CreateCategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
