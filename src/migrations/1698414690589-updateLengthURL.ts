import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateLengthURL1698414690589 implements MigrationInterface {
    name = 'UpdateLengthURL1698414690589'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "imageURL"`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "imageURL" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "imageURL"`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "imageURL" character varying(127) NOT NULL`);
    }

}
