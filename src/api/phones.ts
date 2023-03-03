import { PhoneFromAPI } from '../types/PhoneFromAPI';
import { client } from '../utils/fetchClients';

export const getPhones = () => {
  return client.get<PhoneFromAPI[]>('/phones');
};
