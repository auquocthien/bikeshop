import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'profile' })
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    dob: string

    @Column()
    numberPhone: string

    @Column()
    createAt: Date

    @Column()
    updateAt: Date
}