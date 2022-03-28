import { Request, Response } from 'express';
import ShowAddressService from '../services/ShowAddressService';

export default class AddressController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { cep } = request.params;
    const showAddress = new ShowAddressService();
    const address = await showAddress.exec({ cep });
    console.log(address);
    return response.json(address);
  }
}
