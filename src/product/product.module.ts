import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductCategoryController } from './controllers/product_category.controller';
import { ProductInventoryController } from './controllers/product_inventory.controller';
import { ProductService } from './services/product.service';
import { ProductInventoryService } from './services/product_inventory.service';
import { ProductCategoryService } from './services/product_category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from '../typeorm/entities/product_category';
import { ProductInventory } from '../typeorm/entities/product_inventory';
import { Product } from '../typeorm/entities/product';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductCategory, ProductInventory])],
  controllers: [ProductController, ProductCategoryController, ProductInventoryController],
  providers: [ProductService, ProductInventoryService, ProductCategoryService]
})
export class ProductModule { }
