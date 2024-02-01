import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../typeorm/entities/product';
import { Repository } from 'typeorm';
import { CreateProductType } from '../utils/type';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>) { }

    findProduct() {
        return this.productRepository.find()
    }

    createProduct(productDetail: CreateProductType) {
        return this.productRepository.save(productDetail)
    }
}


