import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

class ListUserService {
  public async exec(): Promise<User[]> {
    const userRepository = getCustomRepository(UserRepository);
    const listUsers = await userRepository.find({ relations: ['address'] });
    return listUsers;
  }
}

export default ListUserService;
