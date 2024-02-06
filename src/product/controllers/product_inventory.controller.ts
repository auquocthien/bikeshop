import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductInventoryService } from '../services/product_inventory.service';
import { CreateProductInventoryDto } from '../dtos/create-product-inventory.dto';

@Controller('product-inventory')
export class ProductInventoryController {
    constructor(private productInventoryService: ProductInventoryService) { }


    @Get()
    async getInventory() {
        return await this.productInventoryService.getInventory()
    }

    @Get(':id')
    async getInventoryById(@Param('id', ParseIntPipe) id: number) {
        return await this.getInventoryById(id)
    }

    @Post()
    @UsePipes(new ValidationPipe)
    async createInventory(@Body() inventoryDetail: CreateProductInventoryDto) {
        return await this.productInventoryService.createInventory(inventoryDetail)
    }

    @Put(':id')
    async updateInventory(@Param('id', ParseIntPipe) id: number, @Body() inventoryDetail: CreateProductInventoryDto) {
        return await this.productInventoryService.updateInventory(id, inventoryDetail)
    }
}
