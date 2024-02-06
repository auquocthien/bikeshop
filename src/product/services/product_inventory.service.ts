import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ProductInventory } from '../../typeorm/entities/product_inventory';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductInventoryDto } from '../dtos/create-product-inventory.dto';

@Injectable()
export class ProductInventoryService {
    constructor(@InjectRepository(ProductInventory) private productInventorRepository: Repository<ProductInventory>) { }

    async getInventoryById(id: number) {
        return await this.productInventorRepository.findOneBy({ id })

    }

    async getInventory() {
        return await this.productInventorRepository.find()
    }

    async createInventory(inventoryDetail: CreateProductInventoryDto) {
        return this.productInventorRepository.save({ ...inventoryDetail, createAt: new Date() })
    }

    async updateInventory(id: number, inventoryDetail: CreateProductInventoryDto) {
        const product = await this.productInventorRepository.findOneBy({ id })
        if (!product) {
            throw new HttpException('product not found', HttpStatus.BAD_REQUEST)
        }
        product.quantity = inventoryDetail.quantity
        return this.productInventorRepository.save({ ...product, updateAt: new Date() })
    }
}
