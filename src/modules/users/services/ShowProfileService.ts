import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';
interface IRequest {
  userId: string;
}

class ShowProfileService {
  public async exec({ userId }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new AppError('Usuario não existe');
    }
    return user;
  }
}

export default ShowProfileService;
