import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe, ParseIntPipe, Put } from '@nestjs/common';
import { ProductCategoryService } from '../services/product_category.service';
import { CreateProductCategoryDto } from '../dtos/create-product-category.dto';

@Controller('product-category')
export class ProductCategoryController {
    constructor(private productCategoryService: ProductCategoryService) { }

    @Get()
    getCategory() {
        return this.productCategoryService.getProductCategory()
    }

    @Post()
    @UsePipes(new ValidationPipe)
    createCategory(@Body() categoryDetail: CreateProductCategoryDto) {
        return this.productCategoryService.createProductCategory(categoryDetail)
    }

    @Delete(':id')
    async deleteCategory(@Param('id', ParseIntPipe) id: number) {
        await this.productCategoryService.deleteProductCategory(id)
    }

    @Get(':id')
    async getCategoryById(@Param('id', ParseIntPipe) id: number) {
        return await this.productCategoryService.findProductCategoryById(id)
    }

    @Put('id')
    async updateCategory(@Param('id', ParseIntPipe) id: number, @Body() categoryDetail: CreateProductCategoryDto) {
        await this.productCategoryService.updateCategory(id, categoryDetail)
    }
}
