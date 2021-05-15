import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('blog')
export class BlogEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    imageURL: string;

}