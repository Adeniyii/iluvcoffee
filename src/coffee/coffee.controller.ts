import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  @Get()
  findAll(): { message: string } {
    return { message: `Here's all your cappuccino` };
  }

  @Get(':id/:misc')
  findOne(@Param() params) {
    return { message: `Here is coffee: ${params.misc} number: ${params.id}` };
  }
}
