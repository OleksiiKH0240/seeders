import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn
} from 'typeorm';


@Entity()
export class User {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column({ name: "firstname", type: "varchar", length: 20 })
    firstName!: string

    @Column({ name: "lastname", type: "varchar", length: 20 })
    lastName!: string

    @Column({ name: "email", type: "varchar", length: 20 })
    email!: string

}


@Entity()
export class Profile {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column({ name: "avatar", type: 'varchar', length: 255, default: null, nullable: true })
    avatar!: string;

    @Column({ name: "cover", type: 'varchar', length: 255, default: null, nullable: true })
    cover!: string;

    @OneToOne(() => User)
    @JoinColumn()
    user?: User;
}
