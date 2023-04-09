import { MigrationInterface, QueryRunner } from "typeorm";

export class UniqueCategoryName1680997844385 implements MigrationInterface {
    name = 'UniqueCategoryName1680997844385'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` ADD UNIQUE INDEX \`IDX_23c05c292c439d77b0de816b50\` (\`name\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` DROP INDEX \`IDX_23c05c292c439d77b0de816b50\``);
    }

}
