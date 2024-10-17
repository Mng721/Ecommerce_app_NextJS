import axios from "axios";

const getAllProduct = () => {
  return axios.get("https://6705e517031fd46a83114bf5.mockapi.io/app");
};

const getProductPaging = (page: number, limit: number) => {
  return axios.get(
    `https://6705e517031fd46a83114bf5.mockapi.io/app?page=${page}&limit=${limit}`
  );
};

const searchProduct = (searchParam: string, page: number) => {
  return axios.get(
    `https://6705e517031fd46a83114bf5.mockapi.io/app?page=${page}&limit=20&search=${searchParam}`
  );
};

export { getAllProduct, getProductPaging, searchProduct };
