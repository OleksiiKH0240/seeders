import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn
} from 'typeorm';
import { User } from "./user";


@Entity()
export class Post {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column({ name: "title", type: 'varchar', length: 255, default: null, nullable: true })
    title!: string;

    @Column({ name: "desc", type: 'varchar', length: 255, default: null, nullable: true })
    desc!: string;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;
}
