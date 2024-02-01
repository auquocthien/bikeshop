import { IsNotEmpty } from "class-validator"

export class CreateUserProfileDto {
    @IsNotEmpty()
    firstName: string

    @IsNotEmpty()
    lastName: string

    @IsNotEmpty()
    dob: string

    @IsNotEmpty()
    numberPhone: string
}