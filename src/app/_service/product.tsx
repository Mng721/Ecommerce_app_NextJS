import axios from "axios";
import { Product } from "../_interfaces/product";

const getAllProduct = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(
    `https://6705e517031fd46a83114bf5.mockapi.io/app`
  );
  return data;
};


const getProductPaging = async (pageParam: any): Promise<any> => {
  const { data } = await axios.get<any>(
    `https://6705e517031fd46a83114bf5.mockapi.io/app?page=${pageParam}&limit=6`
  );
  return data;
};

const searchProduct = (searchParam: string, page: number) => {
  return axios.get(
    `https://6705e517031fd46a83114bf5.mockapi.io/app?page=${page}&limit=20&search=${searchParam}`
  );
};

export { getAllProduct, getProductPaging, searchProduct };
