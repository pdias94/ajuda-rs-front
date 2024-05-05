export interface RequestHelp {
  fullName: string;
  phone: string;
  address: string;
  need: string;
  document: string;
}


export type RequestsHelp = Array<RequestHelp>;
