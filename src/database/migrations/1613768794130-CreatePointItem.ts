import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePointItem1613768794130 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "point_items",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "point_id",
                        type: "integer",
                    },
                    {
                        name: "item_id",
                        type: "integer",
                    },
                ],
                foreignKeys: [
                    {
                        name: "PointItem",
                        columnNames: ["point_id"],
                        referencedTableName: "points",
                        referencedColumnNames: ["id"],
                        onUpdate: "CASCADE",
                        onDelete: "CASCADE",
                    },
                    {
                        name: "ItemPoint",
                        columnNames: ["item_id"],
                        referencedTableName: "items",
                        referencedColumnNames: ["id"],
                        onUpdate: "CASCADE",
                        onDelete: "CASCADE",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('point_items')
    }

}
