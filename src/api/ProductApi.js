import { axiosClient } from "./axiosClient";
import { isAuthenticated } from "../auth";
const { user } = isAuthenticated();
const ProductApi = {
  getAll() {
    const url = `/products`;
    return axiosClient.get(url);
  },
  getAllWithLimit(limit) {
    const url = `/products?_limit=${limit}`;
    return axiosClient.get(url);
  },
  getAllWithPage(page, limit) {
    const url = `/products?_page=${page}&_limit=${limit}`;
    return axiosClient.get(url);
  },
  getByCategory(category_id) {
    const url = `/products/category/${category_id}`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(product) {
    const url = `/products/create/${user._id}`;
    return axiosClient.post(url, product);
  },
  remove(id) {
    const url = `/products/${id}/${user._id}`;
    return axiosClient.delete(url);
  },
  update(id, data) {
    const url = `/products/${id}/${user._id}`;
    return axiosClient.patch(url, data);
  },
  sameCate(idCate) {
    const url = `/products?category=${idCate}&_limit=3`;
    return axiosClient.get(url);
  },
};

export default ProductApi;
