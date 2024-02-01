import { IsNotEmpty } from "class-validator"

export class CreateUserAddressDto {
    @IsNotEmpty()
    addressLine1: string

    @IsNotEmpty()
    addressLine2?: string

    @IsNotEmpty()
    city: string

    @IsNotEmpty()
    postalCode: string

    @IsNotEmpty()
    country: string
}