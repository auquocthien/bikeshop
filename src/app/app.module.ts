import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Profile } from 'src/typeorm/entities/user';
import { UsersModule } from 'src/users/users.module';
import { Post } from 'src/typeorm/entities/post';
import { Address } from '../typeorm/entities/address';
import { Discount } from '../typeorm/entities/discount';
import { Product } from '../typeorm/entities/product';
import { ProductCategory } from '../typeorm/entities/product_category';
import { ProductInventory } from '../typeorm/entities/product_inventory';
import { OrderDetail } from '../typeorm/entities/order_detail';
import { OrderItem } from '../typeorm/entities/order_item';
import { PaymentDetail } from '../typeorm/entities/payment_detail';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    // password: 'thien',
    database: 'bikeshop',
    entities: [User, Profile, Post, Address, Discount, Product, ProductCategory, ProductInventory, OrderDetail, OrderItem, PaymentDetail],
    synchronize: true
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
