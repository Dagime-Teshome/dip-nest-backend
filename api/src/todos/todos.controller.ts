/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';

export interface TodoDTO {
  description: string;
  done: boolean;
}

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Get()
  async findAll() {
    return await this.todoService.findAll();
  }

  @Post()
  async create(@Body() todo: TodoDTO) {
    return await this.todoService.create(todo);
  }

  @Put(':id')
  async update(@Param('id') id, @Body('todo') todo: TodoDTO) {
    return await this.todoService.update(id, todo);
  }

  @Delete()
  async delete(@Body() id: number) {
    return await this.todoService.delete(id);
  }
}
