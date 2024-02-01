import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";
import { Post } from './post';
import { Address } from './address';

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    username: string

    @Column()
    password: string

    @Column()
    createAt: Date

    @Column({ nullable: true })
    authStratery: string

    @OneToOne(() => Profile, { onDelete: 'CASCADE' })
    @JoinColumn()
    profile: Profile

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]

    @OneToMany(() => Address, (address) => address.user)
    address: Address[]



}

export { Profile };
