import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user';
import { PaymentDetail } from './payment_detail';

@Entity({ name: 'order_detail' })
export class OrderDetail {

    @PrimaryGeneratedColumn()
    id: number

    @Column('float')
    total: number

    @Column()
    createAt: Date

    @Column()
    updateAt: Date

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @OneToOne(() => PaymentDetail)
    @JoinColumn()
    payment: PaymentDetail

}