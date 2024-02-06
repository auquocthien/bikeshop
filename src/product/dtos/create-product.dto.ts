import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    desc: string

    @IsNotEmpty()
    sku: string

    @IsNotEmpty()
    price: number

    @IsNotEmpty()
    category: number

    @IsNotEmpty()
    quantity: number
}