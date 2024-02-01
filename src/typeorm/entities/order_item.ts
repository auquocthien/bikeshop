import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from './product';
import { OrderDetail } from './order_detail';

@Entity({ name: 'order_item' })
export class OrderItem {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantity: number

    @Column()
    createAt: Date

    @Column()
    updateAt: Date

    @OneToOne(() => Product)
    @JoinColumn()
    product: Product

    @OneToOne(() => OrderDetail)
    @JoinColumn()
    order: OrderDetail
}