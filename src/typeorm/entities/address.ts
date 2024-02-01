import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity({ name: 'address' })
export class Address {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    addressLine1: string

    @Column({ nullable: true })
    addressLine2?: string

    @Column()
    city: string

    @Column()
    postalCode: string

    @Column()
    country: string

    @Column()
    createAt: Date

    @ManyToOne(() => User, (user) => user.address)
    user: User
}