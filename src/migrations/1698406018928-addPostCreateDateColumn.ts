import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPostCreateDateColumn1698406018928 implements MigrationInterface {
    name = 'AddPostCreateDateColumn1698406018928'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ADD "order_date" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "order_date"`);
    }

}
