import {
  BaseEntity,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable, PrimaryGeneratedColumn,
} from 'typeorm';
import {Player} from "@/entity/Player";
import {TeamCategory} from "@/enums";

@Entity()
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'enum', enum: TeamCategory})
  category: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Player, player => player.teams)
  @JoinTable()
  players: Player[];
}