import { Body, Controller, Get, Param, Post, ParseIntPipe, Delete, Put } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { CreateProductDto } from '../dtos/create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get()
    getProduct() {
        return this.productService.findProduct()
    }

    @Post()
    createProduct(@Body() productDetail: CreateProductDto) {
        return this.productService.createProduct(productDetail)
    }

    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: number) {
        return this.productService.getProductById(id)
    }

    @Delete(':id')
    async deleteProduct(@Param('id', ParseIntPipe) id: number) {
        await this.productService.deleteProduct(id)
    }

    @Put(':id')
    async updateProduct(@Param('id', ParseIntPipe) id: number, @Body() productDetail: CreateProductDto) {
        await this.productService.updateProduct(id, productDetail)
    }
}
