import { PhonesResponse } from '../types/PhonesResponse';
import { client } from '../utils/fetchClients';

export const getAllPhones = (page: number, perPage: number) => {
  return client.get<PhonesResponse>(`/products?page=${page}&perPage=${perPage}`)
    .then(res => res.data);
};

export const getSortedPhones = (page: number, perPage: number, sortBy: string) => {
  return client.get<PhonesResponse>(`/products?page=${page}&perPage=${perPage}&sortBy=${sortBy}`)
    .then(res => res.data);
};

export const getPhonesForSlider = (sortBy: string) => {
  return client.get<PhonesResponse>(`/products?sortBy=${sortBy}`)
    .then(res => res.data);
};

export const getPhoneById = (phoneId: string) => {
  return client.get<PhonesResponse>(`/product_details/${phoneId}`);
};
