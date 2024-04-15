import {
  Entity,
  Unique,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {Team} from "@/entity/Team";
import {ShirtSize} from "@/enums";

@Entity('player')
@Unique(['email'])
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({type: 'enum', enum: ShirtSize})
  shirtSize: string;

  @Column()
  availability: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Team, team => team.players)
  teams: Team[];
}