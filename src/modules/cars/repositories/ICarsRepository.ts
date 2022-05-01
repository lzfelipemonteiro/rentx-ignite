import { ICreateCarDTO } from '../dtos/ICreateCarsDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable(
    brand?: string,
    name?: string,
    category_id?: string
  ): Promise<Car[]>;
}

export { ICarsRepository };
