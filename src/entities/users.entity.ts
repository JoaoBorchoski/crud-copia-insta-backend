import { getRounds, hashSync } from "bcryptjs";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BeforeInsert,
    BeforeUpdate,
} from "typeorm";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 127 })
    name: string;

    @Column({ length: 127, unique: true })
    email: string;

    @Column({ length: 255 })
    password: string;

    @Column({ nullable: true })
    avatar: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        if (!getRounds(this.password)) {
            this.password = hashSync(this.password, 10);
        }

        if (!this.avatar) {
            this.avatar =
                "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
        }
    }
}

export default User;
