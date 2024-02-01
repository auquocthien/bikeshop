import { IsEmail, IsNotEmpty, IsNumber } from "class-validator"
export class UserCreateDetail {

    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    password: string


}