import { IsNumber } from "class-validator";

export class UpdateProductInventory {
    @IsNumber()
    quantity: number

}