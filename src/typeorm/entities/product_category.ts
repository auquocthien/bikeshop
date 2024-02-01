import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product';

@Entity({ name: 'product_category' })
export class ProductCategory {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    desc: string

    @Column()
    createAt: Date

    @Column()
    updateAt: Date

    @Column()
    deleteAt: Date

    @OneToMany(() => Product, (product) => product.category)
    product: Product[]
}