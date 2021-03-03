import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("items")
export default class Item {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  image: string;

  @Column()
  title: string;
}