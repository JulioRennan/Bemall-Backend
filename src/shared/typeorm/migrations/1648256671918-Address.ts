import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Address1648256671918 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'address',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'cep',
            type: 'varchar',
          },
          {
            name: 'cidade',
            type: 'varchar',
          },
          { name: 'uf', type: 'varchar' },
          {
            name: 'logradouro',
            type: 'varchar',
          },
          {
            name: 'bairro',
            type: 'varchar',
          },
          {
            name: 'numero',
            type: 'int',
          },
          {
            name: 'complemento',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(new Table({ name: 'address' }));
  }
}
