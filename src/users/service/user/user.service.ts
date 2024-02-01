import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { CreatePostType, CreateProfiletype, CreateUserAddressType, CreateUserType, UpdateUserType } from 'src/users/utils/types';
import { Repository } from 'typeorm';
import { Profile } from '../../../typeorm/entities/profile';
import { Post } from 'src/typeorm/entities/post';
import { Address } from '../../../typeorm/entities/address';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>,
        @InjectRepository(Post) private postRepository: Repository<Post>,
        @InjectRepository(Address) private addressRepository: Repository<Address>
    ) { }


    findUser() {
        return this.userRepository.find({ relations: ['profile', 'posts', 'address'] })
    }

    createUser(userDetail: CreateUserType) {
        const newUser = this.userRepository.create({
            ...userDetail,
            createAt: new Date()
        })
        return this.userRepository.save(newUser)

    }

    async updateUser(id: number, userDetail: UpdateUserType) {
        const user = await this.userRepository.findOne({ where: { id } })
        console.log(user)
        if (!user) {
            throw new HttpException('user not found', HttpStatus.NOT_FOUND)
        }
        return this.userRepository.update({ id }, { ...userDetail })
    }

    async deleteUser(id: number) {
        const user = this.userRepository.findOneBy({ id })

        if (!user) {
            throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
        }
        await this.addressRepository.delete({ user: { id } })
        await this.profileRepository.delete(id)
        return this.userRepository.delete({ id })
    }

    async createUserProfile(id: number, profileDetail: CreateProfiletype) {
        const user = await this.userRepository.findOneBy({ id })
        if (!user) {
            throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
        }
        const newProfile = this.profileRepository.create({ ...profileDetail, createAt: new Date() })
        const saveProfile = await this.profileRepository.save(newProfile)
        user.profile = saveProfile
        return this.userRepository.save(user)
    }

    async deleteProfile(id: number) {
        return this.profileRepository.delete({ id })
    }

    async createUserPost(id: number, postDetail: CreatePostType) {
        const user = await this.userRepository.findOneBy({ id })
        if (!user) {
            throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
        }

        const newPost = this.postRepository.create({ ...postDetail, createAt: new Date(), user })
        return this.postRepository.save(newPost)
    }


    async createUserAddress(id: number, addressDetail: CreateUserAddressType) {
        const user = await this.userRepository.findOneBy({ id })
        if (!user) {
            throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
        }
        const newAddress = this.addressRepository.create({ ...addressDetail, createAt: new Date(), user })
        return this.addressRepository.save(newAddress)
    }

    async deleteUserAddress(id: number, idAdd: number) { }
}
