import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPostCreateDateColumn21698406078127 implements MigrationInterface {
    name = 'AddPostCreateDateColumn21698406078127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" RENAME COLUMN "order_date" TO "created_at"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" RENAME COLUMN "created_at" TO "order_date"`);
    }

}
