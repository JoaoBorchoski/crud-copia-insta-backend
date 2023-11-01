import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
} from "typeorm";
import User from "./users.entity";

@Entity("posts")
class Post {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 300 })
    imageURL: string;

    @Column({ length: 127 })
    description: string;

    @CreateDateColumn({ type: "date" })
    created_at: string;

    @ManyToOne(() => User, { onDelete: "CASCADE" })
    @JoinColumn()
    user: User | number;
}

export default Post;
