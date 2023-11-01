import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPost1698405788805 implements MigrationInterface {
    name = 'AddPost1698405788805'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "imageURL" character varying(127) NOT NULL, "description" character varying(127) NOT NULL, "userId" integer, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_aa22377d7d3e794ae4cd39cd9e5" UNIQUE ("phone")`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_aa22377d7d3e794ae4cd39cd9e5"`);
        await queryRunner.query(`DROP TABLE "posts"`);
    }

}
