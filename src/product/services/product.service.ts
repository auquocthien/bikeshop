import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../typeorm/entities/product';
import { Repository } from 'typeorm';
import { CreateProductType, UpdateProductParam } from '../utils/types';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductCategoryService } from './product_category.service';
import { ProductInventoryService } from './product_inventory.service';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>,
        private categoryService: ProductCategoryService,
        private inventoryService: ProductInventoryService,
    ) { }

    findProduct() {
        return this.productRepository.find({ relations: ['category', 'inventory', 'discount'] })
    }

    async createProduct(productDetail: CreateProductDto) {
        const category = await this.categoryService.findProductCategoryById(productDetail.category)
        const inventory = await this.inventoryService.createInventory({ quantity: productDetail.quantity })
        if (!category) {
            throw new HttpException('category not found', HttpStatus.BAD_REQUEST)
        }
        const newProduct = this.productRepository.create({ ...productDetail, createAt: new Date(), category })
        return this.productRepository.save(newProduct)
    }

    async getProductById(id: number) {
        return this.productRepository.findOne({ where: { id: id }, relations: { category: true, discount: true } })
    }

    async updateProduct(id: number, productDetail: UpdateProductParam) {
        const product = await this.productRepository.findOneBy({ id })

        if (!product) {
            throw new HttpException('product not found', HttpStatus.BAD_REQUEST)
        }
        return this.productRepository.update({ id }, { ...productDetail, updateAt: new Date() })

    }

    async deleteProduct(id: number) {
        return this.productRepository.delete({ id })
    }
}


