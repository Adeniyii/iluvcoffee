import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Injectable()
export class CoffeeService {
  private coffees: CreateCoffeeDto[] = [
    {
      id: 1,
      name: 'Cappuccino',
      brand: 'Nestle',
      flavours: ['Valilla', 'Choco'],
    },
  ];

  /**
   * Find all coffees in database
   * @returns Coffee[]
   */
  findAll() {
    return this.coffees;
  }

  /**
   * Find a single coffee from database
   * @param id Unique coffee id
   * @returns coffee
   */
  findOne(id: number) {
    const coffee = this.coffees.find((c) => c.id === id);
    return coffee;
  }

  /**
   * Insert a new coffee into the database.
   * @param coffee Coffee object
   */
  insertOne(coffee: CreateCoffeeDto) {
    this.coffees.push(coffee);
    return coffee;
  }

  /**
   * Update a single coffee
   * @param id Unique coffee id
   * @param body Payload to be inserted
   * @returns coffee
   */
  updateOne(id: number, body) {
    const updated = this.coffees.map((c) => {
      if (c.id === id) {
        return { ...c, ...body };
      }
      return c;
    });
    this.coffees = updated;
    return updated;
  }

  /**
   * Delete single coffee from database
   * @param id Unique coffee id
   * @returns
   */
  deleteOne(id: number) {
    const valid = this.coffees.filter((c) => {
      return c.id !== id;
    });
    this.coffees = valid;
    return valid;
  }
}
