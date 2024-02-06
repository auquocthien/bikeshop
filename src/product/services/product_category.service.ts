import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCategory } from '../../typeorm/entities/product_category';
import { Repository } from 'typeorm';
import { CreateProductCategoryType } from '../utils/types';

@Injectable()
export class ProductCategoryService {
    constructor(@InjectRepository(ProductCategory) private productCategoryRepository: Repository<ProductCategory>) { }

    getProductCategory() {
        return this.productCategoryRepository.find()
    }

    async findProductCategoryById(id: number) {
        const category = await this.productCategoryRepository.findOneBy({ id })
        if (!category) {
            throw new HttpException('category not found', HttpStatus.BAD_REQUEST)
        }
        return category
    }

    createProductCategory(producCategoryDetail: CreateProductCategoryType) {
        return this.productCategoryRepository.save({ ...producCategoryDetail, createAt: new Date() })
    }

    async deleteProductCategory(id: number) {
        const category = await this.productCategoryRepository.findOneBy({ id })

        if (!category) {
            throw new HttpException('category not found', HttpStatus.BAD_REQUEST)
        }
        return await this.productCategoryRepository.delete(id)
    }

    async updateCategory(id: number, categoryDetail: CreateProductCategoryType) {
        const category = this.productCategoryRepository.findOneBy({ id })

        if (!category) {
            throw new HttpException('category not found', HttpStatus.BAD_REQUEST)
        }
        return this.productCategoryRepository.update({ id }, { ...categoryDetail, updateAt: new Date() })
    }

}
