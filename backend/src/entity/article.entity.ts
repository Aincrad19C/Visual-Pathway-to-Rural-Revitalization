import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'text' })
    content: string;
}
