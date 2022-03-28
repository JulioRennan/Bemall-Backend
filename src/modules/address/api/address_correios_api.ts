import axios from 'axios';
import { AddressDTO } from '../dto/adress_dto';

class AddressCorreiosApi {
  baseUrlCorreios = 'http://viacep.com.br';

  public async queryCorreios(cep: string): Promise<AddressDTO> {
    const path = `${this.baseUrlCorreios}/ws/${cep}/json`;
    const newAdress = new AddressDTO();
    return axios.get(path).then(r => newAdress.fromJson(r.data));
  }
}

export default AddressCorreiosApi;
