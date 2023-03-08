import { Phone } from '../types/Phone';
import { client } from '../utils/fetchClients';

export const getPhones = (page: number, perPage: number) => {
  return client.get<Phone[]>(`/products?page=${page}&perPage=${perPage}`);
};
