import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Map {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'json' })
    data: object;
}
