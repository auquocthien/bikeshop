import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product';

@Entity({ name: 'product_inventory' })
export class ProductInventory {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantity: number

    @Column()
    createAt: Date

    @Column()
    updateAt: Date

    @Column()
    deleteAt: Date

}