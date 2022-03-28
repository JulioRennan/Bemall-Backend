import User from '@modules/users/typeorm/entities/User';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('address')
class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cep: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  bairro: string;

  @Column()
  logradouro: string;

  @Column()
  numero: number;

  @ManyToOne(() => User, user => user.address)
  @JoinColumn({ name: 'user_id' })
  @Exclude()
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Address;
