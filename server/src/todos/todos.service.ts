import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './todos.model';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {

    constructor(@InjectModel(Todo) private todoRepository: typeof Todo) {}

    async createTodo(dto: CreateTodoDto, req: any) {
         const todo = await this.todoRepository.create({...dto, userId: req.user.id})
         return todo
    }

    async getAllTodos(req: any) {
        const todos = await this.todoRepository.findAll({where: {userId: req.user.id}})
        return todos
    }

    async removeTodo(id: number) {
        const todo = await this.todoRepository.destroy({where: {id}})
        return todo
    }
}
