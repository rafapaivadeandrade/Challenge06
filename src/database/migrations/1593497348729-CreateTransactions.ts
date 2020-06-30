/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import {MigrationInterface, QueryRunner, Table} from "typeorm";

// eslint-disable-next-line import/prefer-default-export
export default class CreateTransactions1593497348729 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'transactions',
                columns: [
                    {
                        name: 'id',
                        type:'uuid',
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'title',
                        type:'varchar',
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },
                    {
                        name: 'value',
                        type: 'decimal',
                        precision:10,
                        scale: 2,
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
        await _queryRunner.dropTable('transactions')

  }
}
