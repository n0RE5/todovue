import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface TodoCreationAttrs {
    username: string;
    email: string;
    password: string;
    userId: number;
}

@Table({tableName: 'todos'})
export class Todo extends Model<Todo, TodoCreationAttrs> {
    @ApiProperty({example: '1', description: "ID"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Title 1', description: "Todo Title"})
    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @ApiProperty({example: 'T', description: "icon"})
    @Column({type: DataType.STRING, allowNull: false})
    icon: string;

    @ApiProperty({example: 'My first todo', description: "Todo text"})
    @Column({type: DataType.STRING, allowNull: false})
    text: string;

    @ForeignKey(() => User)
    userId: number;
}