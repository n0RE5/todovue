import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto {
    @ApiProperty({example: 'Title 1', description: "Todo Title"})
    readonly title: string;

    @ApiProperty({example: 'T', description: "icon"})
    readonly icon: string;
    
    @ApiProperty({example: 'My first todo', description: "Todo text"})
    readonly text: string;
}