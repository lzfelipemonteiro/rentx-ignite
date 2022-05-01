import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listCarsAvailableUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsAvailableUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it('Should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Carro 1',
      description: 'Descricao Carro 1',
      daily_rate: 110.0,
      license_plate: 'ABC-1212',
      fine_amount: 80.0,
      brand: 'Audi',
      category_id: '5b54e0cf-9a10-4753-b926-4404ebfc894f',
    });

    const cars = await listCarsAvailableUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Carro 1',
      description: 'Descricao Carro 1',
      daily_rate: 110.0,
      license_plate: 'ABC-1212',
      fine_amount: 80.0,
      brand: 'Car_brand',
      category_id: '5b54e0cf-9a10-4753-b926-4404ebfc894f',
    });

    // const car2 = await carsRepositoryInMemory.create({
    //   name: 'Carro 1',
    //   description: 'Descricao Carro 1',
    //   daily_rate: 110.0,
    //   license_plate: 'ABC-1212',
    //   fine_amount: 80.0,
    //   brand: 'Car_brand2',
    //   category_id: '5b54e0cf-9a10-4753-b926-4404ebfc894f',
    // });

    const cars = await listCarsAvailableUseCase.execute({
      brand: 'Car_brand',
    });

    // console.log(cars);

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Carro 3',
      description: 'Descricao Carro 1',
      daily_rate: 110.0,
      license_plate: 'ABC-12124',
      fine_amount: 80.0,
      brand: 'Car_brand',
      category_id: '5b54e0cf-9a10-4753-b926-4404ebfc894f',
    });

    // const car2 = await carsRepositoryInMemory.create({
    //   name: 'Carro 1',
    //   description: 'Descricao Carro 1',
    //   daily_rate: 110.0,
    //   license_plate: 'ABC-1212',
    //   fine_amount: 80.0,
    //   brand: 'Car_brand2',
    //   category_id: '5b54e0cf-9a10-4753-b926-4404ebfc894f',
    // });

    const cars = await listCarsAvailableUseCase.execute({
      name: 'Carro 3',
    });

    // console.log(cars);

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Carro 3',
      description: 'Descricao Carro 1',
      daily_rate: 110.0,
      license_plate: 'ABC-12124',
      fine_amount: 80.0,
      brand: 'Car_brand',
      category_id: '12345',
    });

    // const car2 = await carsRepositoryInMemory.create({
    //   name: 'Carro 1',
    //   description: 'Descricao Carro 1',
    //   daily_rate: 110.0,
    //   license_plate: 'ABC-1212',
    //   fine_amount: 80.0,
    //   brand: 'Car_brand2',
    //   category_id: '5b54e0cf-9a10-4753-b926-4404ebfc894f',
    // });

    const cars = await listCarsAvailableUseCase.execute({
      category_id: '12345',
    });

    // console.log(cars);

    expect(cars).toEqual([car]);
  });
});
