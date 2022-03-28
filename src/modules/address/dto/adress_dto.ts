export class AddressDTO {
  cep: string;
  cidade: string;
  uf: string;
  logradouro: string;
  numero: number;
  bairro: string;
  complemento: string | undefined;

  public fromJson(json: any): AddressDTO {
    this.cep = json.cep;
    this.cidade = json.localidade;
    this.uf = json.uf;
    this.logradouro = json.logradouro;
    this.numero = json.numero;
    this.bairro = json.bairro;
    this.complemento = json.complemento;
    return this;
  }
}
