import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("points")
export default class Point {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  image: string;

  @Column()
  name: string;
  
  @Column()
  email: string;
  
  @Column()
  whatsapp: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;
}