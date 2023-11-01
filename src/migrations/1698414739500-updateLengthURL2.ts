import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateLengthURL21698414739500 implements MigrationInterface {
    name = 'UpdateLengthURL21698414739500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "imageURL"`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "imageURL" character varying(300) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "imageURL"`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "imageURL" character varying(127) NOT NULL`);
    }

}
