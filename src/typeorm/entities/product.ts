import { ProductCategory } from './product_category';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Discount } from './discount';
import { ProductInventory } from './product_inventory';

@Entity({ name: 'product' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    desc: string

    @Column()
    sku: string

    @Column('float')
    price: number

    @Column()
    createAt: Date

    @Column()
    updateAt: Date

    @Column()
    deleteAt: Date

    @Column()
    quantity: number

    @ManyToOne(() => ProductCategory, (category) => category.product)
    category: ProductCategory

    @ManyToOne(() => Discount, (discount) => discount.product)
    discount: Discount
}

export { ProductInventory }