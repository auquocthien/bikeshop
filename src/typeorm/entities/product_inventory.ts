import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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