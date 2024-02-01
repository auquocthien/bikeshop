import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCategory } from '../../typeorm/entities/product_category';
import { Repository } from 'typeorm';
import { CreateProductCategoryType } from '../../../dist/product/utils/type';

@Injectable()
export class ProductCategoryService {
    constructor(@InjectRepository(ProductCategory) private productCategoryRepository: Repository<ProductCategory>) { }

    getProductCategory() {
        return this.productCategoryRepository.find()
    }

    findProductCategoryById(id: number) {
        return this.productCategoryRepository.findOneBy({ id })
    }

    createProductCategory(producCategoryDetail: CreateProductCategoryType) {
        return this.productCategoryRepository.save(producCategoryDetail)
    }
}
