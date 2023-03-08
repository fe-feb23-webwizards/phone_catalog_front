import { PhonesResponse } from '../types/PhonesResponse';
import { client } from '../utils/fetchClients';

export const getPhones = (page: number, perPage: number) => {
  return client.get<PhonesResponse>(`/products?page=${page}&perPage=${perPage}`)
    .then(res => res.data);
};

export const getPhoneById = (phoneId: string) => {
  return client.get<PhoneFromAPI>(`/phones/${phoneId}`);
};
