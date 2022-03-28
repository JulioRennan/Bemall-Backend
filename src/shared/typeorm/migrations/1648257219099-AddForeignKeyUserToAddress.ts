import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddForeignKeyUserToAddress1648257219099 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'address',
            new TableColumn({
              name: 'user_id',
              type:'int'
            }),
          );
          await queryRunner.createForeignKey(
            'address',
            new TableForeignKey({
              name: 'AddressUser',
              columnNames: ['user_id'],
              referencedTableName: 'users',
              referencedColumnNames: ['id'],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('address', 'AddressUser');
        await queryRunner.dropColumn('address', 'user_id');
    }

}
