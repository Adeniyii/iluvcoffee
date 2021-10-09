import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}
  @Get()
  findAll() {
    const allCoffee = this.coffeeService.findAll();
    return { message: 'success', payload: allCoffee };
  }

  @Get(':id/')
  findOne(@Param('id') id: string) {
    const coffee = this.coffeeService.findOne(Number.parseInt(id, 10));
    if (!coffee) {
      throw new NotFoundException(`Coffee ${id} does not exist`);
    }
    return { message: 'success', payload: coffee };
  }

  @Post()
  addOne(@Body() createCoffeeDto: CreateCoffeeDto) {
    const response = this.coffeeService.insertOne(createCoffeeDto);
    return { message: 'success', payload: response };
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() body) {
    const payload = this.coffeeService.updateOne(Number.parseInt(id, 10), body);
    return { message: 'success', payload };
  }

  @Delete(':id')
  removeOne(@Param('id') id: string) {
    const payload = this.coffeeService.deleteOne(Number.parseInt(id, 10));
    return { message: 'success', payload };
  }
}
