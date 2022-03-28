import { AddressDTO } from '@modules/address/dto/adress_dto';
import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';

class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUserService();
    const users = (await listUsers.exec()).map(user =>
      instanceToInstance(user),
    );
    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createUser = new CreateUserService();
    const {
      name,
      email,
      password,
      cep,
      cidade,
      uf,
      logradouro,
      numero,
      bairro,
      complemento,
    } = request.body;

    const address: AddressDTO = {
      cep,
      cidade,
      uf,
      logradouro,
      numero,
      bairro,
      complemento,
    };

    const newUser = await createUser.exec({
      name,
      email,
      password,
      address,
    });

    return response.json(instanceToInstance(newUser));
  }
}
export default UserController;
