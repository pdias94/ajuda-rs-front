export interface Shelter {
  id: string;
  estrutura_pessoas: string;
  nome_contato: string;
  latitude: number;
  nome: string;
  roupa_cama: string;
  banheiros: string;
  address: string;
  ext_getLatLongStatus: {
    status: string;
  };
  cozinha: string;
  telefone: string;
  vagas: string;
  demanda: string;
  create_in: {
    seconds: number;
    nanoseconds: number;
  };
  pmpa: string;
  longitude: number;
  vagas_ocupadas: string;
  update_in: {
    seconds: number;
    nanoseconds: number;
  };
}

export type Shelters = Array<Shelter>;

