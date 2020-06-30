/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import {MigrationInterface, QueryRunner , Table} from "typeorm";

export default class CreateCategories1593498103111 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                    {
                        name: 'id',
                        type:'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'title',
                        type:'varchar',
                    },
                   
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default:'now()',
                    },
                    {
                        name: 'updated_at',
                        type:'timestamp',
                        default:'now()',
                    },
                ],
            }),
        )
    }

  public async down(_queryRunner: QueryRunner): Promise<void> {
        await _queryRunner.dropTable('categories')

  }
}