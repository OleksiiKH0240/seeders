import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';


@Entity()
export class User {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column({ name: "firstname", type: "varchar", length: 20 })
    firstName!: string

    @Column({ name: "lastname", type: "varchar", length: 256 })
    lastName!: string

    @Column({ name: "email", type: "varchar", length: 256 })
    email!: string

}
