import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name : 'order'})
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  price: number;

  @Column({ default: 'NEW' })
  status: string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createTimestamp: Date;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updateTimestamp: Date;

  @Column({default:() => 0})
  paymentId: number; 
}