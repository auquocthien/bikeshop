import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserCreateDetail } from 'src/users/dtos/create-user-detail.dto';
import { UserService } from 'src/users/service/user/user.service';
import { UserUpdateDto } from 'src/users/dtos/user-update.dto';
import { CreateUserProfileDto } from 'src/users/dtos/create-user-profile.dto';
import { CreateUserPostDto } from 'src/users/dtos/create-user-post.dto';
import { CreateUserAddressDto } from '../../dtos/create-user-address.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    async getUser() {
        const users = await this.userService.findUser()
        return users
    }

    @Post()
    createUser(@Body() userInfo: UserCreateDetail) {
        console.log(userInfo)
        return this.userService.createUser(userInfo)
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number): string {
        return `this action return ${id} user`
    }

    @Put(':id')
    async updateUserById(
        @Param('id', ParseIntPipe) id: number,
        @Body() userInfo: UserUpdateDto) {
        await this.userService.updateUser(id, userInfo)
    }

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number) {
        await this.userService.deleteUser(id)
    }

    @Post(':id/profile')
    createUserProfile(@Param('id', ParseIntPipe) id: number, @Body() profileInfo: CreateUserProfileDto) {
        return this.userService.createUserProfile(id, profileInfo)
    }

    @Delete(':id/profile')
    async deleteProfileById(@Param('id', ParseIntPipe) id: number) {
        await this.userService.deleteProfile(id)
    }

    @Post(':id/post')
    createUserPost(@Param('id', ParseIntPipe) id: number, @Body() postInfo: CreateUserPostDto) {
        return this.userService.createUserPost(id, postInfo)
    }

    @Post(':id/address')
    createUsereAddress(@Param('id', ParseIntPipe) id: number, @Body() addressInfo: CreateUserAddressDto) {
        return this.userService.createUserAddress(id, addressInfo)
    }

    @Delete(':id/address/:idAdd')
    async deleteUserAddress(@Param('id', ParseIntPipe) id: number, @Param('idAdd', ParseIntPipe) idAdd: number) {
        await this.userService.deleteUserAddress(id, idAdd)
    }

}

