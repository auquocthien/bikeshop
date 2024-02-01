import internal from "stream";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'payment_detail' })
export class PaymentDetail {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    amount: number

    @Column()
    provider: string

    @Column()
    status: string

    @Column()
    createAt: Date

    @Column()
    updateAt: Date

}