import { Body, Controller, Get } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { CreateProductDto } from '../dtos/create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get()
    getProduct(@Body() productDetail: CreateProductDto) {
        return this.productService.createProduct(productDetail)
    }
}
