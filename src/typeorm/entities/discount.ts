import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product';

@Entity({ name: 'discount' })
export class Discount {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    desc: string

    @Column('float')
    discountPercent: number

    @Column()
    active: boolean

    @Column()
    createAt: Date

    @Column()
    updateAt: Date

    @Column()
    deleteAt: Date

    @OneToMany(() => Product, (product) => product.discount)
    product: Product[]
}