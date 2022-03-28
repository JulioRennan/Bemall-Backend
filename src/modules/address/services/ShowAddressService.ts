import AppError from '@shared/errors/AppError';
import AddressCorreiosApi from '../api/address_correios_api';
import { AddressDTO } from '../dto/adress_dto';

interface IRequest {
  cep: string;
}

interface IResponse {
  address: AddressDTO;
}

class ShowAddressService {
  public async exec({ cep }: IRequest): Promise<IResponse> {
    const correiosApi = new AddressCorreiosApi();
    let address: AddressDTO;
    try {
      address = await correiosApi.queryCorreios(cep);
    } catch (error) {
      throw new AppError('Serviço temporariamente indisponível', 503);
    }
    if (!address.cep) {
      throw new AppError('Cep não encontrado', 404);
    }
    return { address };
  }
}
export default ShowAddressService;
