import { AddressDTO } from '@modules/address/dto/adress_dto';
import AddressRepository from '@modules/address/typeorm/repositories/address_repository';
import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  address: AddressDTO;
}
class CreateUserService {
  public async exec({
    name,
    email,
    password,
    address,
  }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const addressRepository = getCustomRepository(AddressRepository);

    const userExists = await userRepository.findByEmail(email);
    if (userExists) {
      throw new AppError('Esse email ja foi utilizado.');
    }
    const hashedPassword = await hash(password, 8);

    const newUser = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    const userAddress = addressRepository.create({
      cep: address.cep,
      cidade: address.cidade,
      logradouro: address.logradouro,
      numero: address.numero,
      bairro: address.bairro,
      uf: address.uf,
    });

    await userRepository.save(newUser);
    userAddress.user = newUser;
    await addressRepository.save(userAddress);
    newUser.address = [userAddress];
    return newUser;
  }
}

export default CreateUserService;
