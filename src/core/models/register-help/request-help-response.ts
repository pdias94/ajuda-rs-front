export interface RequestHelpResponse {
  _id: string;
  fullName: string;
  phone: string;
  address: string;
  need: string;
  document: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


export type RequestsHelpResponse = Array<RequestHelpResponse>;
