import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Todo } from './todos.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [
    SequelizeModule.forFeature([User, Todo]),
    AuthModule
  ]
})
export class TodosModule {}
