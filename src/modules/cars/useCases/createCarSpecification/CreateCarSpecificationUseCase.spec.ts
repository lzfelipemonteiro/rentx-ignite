import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { SpecificationRepositoryInMemory } from '@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;

describe('Create car specification', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationRepositoryInMemory
    );
  });

  it('Should not be able to add a new specification to a no-existent car ', async () => {
    expect(async () => {
      const car_id = '1234';
      const specification_id = ['54231'];
      await createCarSpecificationUseCase.execute({ car_id, specification_id });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to add a new specification to the car ', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    const specification = await specificationRepositoryInMemory.create({
      name: 'test',
      description: 'test',
    });

    const specification_id = [specification.id];
    const specificationsCar = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specification_id,
    });

    console.log(specificationsCar);

    expect(specificationsCar).toHaveProperty('specifications');
    expect(specificationsCar.specifications.length).toBe(1);
  });
});
