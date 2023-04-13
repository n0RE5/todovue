import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { TodosService } from './todos.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Todo } from './todos.model';
import { CreateTodoDto } from './dto/create-todo.dto';
import { AuthGuard } from 'src/auth/auth-guard';

@Controller('todos')
export class TodosController {
    
    constructor(private todoService: TodosService) {}

    @ApiOperation({summary: "Create Todo"})
    @ApiResponse({status: 200, type: Todo})
    @UseGuards(AuthGuard)
    @Post()
    create(@Body() todoDto: CreateTodoDto, @Req() req) {
        return this.todoService.createTodo(todoDto, req)
    }

    @ApiOperation({summary: "Remove Todo"})
    @ApiResponse({status: 200, type: Todo})
    @UseGuards(AuthGuard)
    @Post('/:id')
    remove(@Param('id') id: number) {
        return this.todoService.removeTodo(id)
    }

    @ApiOperation({summary: "Get All Todos"})
    @ApiResponse({status: 200, type: [Todo]})
    @UseGuards(AuthGuard)
    @Get()
    get(@Req() req) {
        return this.todoService.getAllTodos(req)
    }
}
