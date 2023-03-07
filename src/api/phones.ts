import { PhoneFromAPI } from '../types/PhoneFromAPI';
import { client } from '../utils/fetchClients';

export const getPhones = (page: number, perPage: number) => {
  return client.get<PhoneFromAPI[]>(`/phones?page=${page}&perPage=${perPage}`);
};
