import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Customers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  username: string;
}
