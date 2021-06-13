import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  useParams,
  useHistory,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import ProductApi from "../api/ProductApi";
import toastr from "toastr";

const ProductEdit = (props) => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState([]);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await ProductApi.update(idProduct, data);
      const { data: products } = await ProductApi.getAll();
      props.onAdd([...products]);
      toastr.success(`Edit thành công`);
      history.push("/admin/products");
    } catch (error) {
      toastr.error(`Đã gặp lỗi: ${error.message}`);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await ProductApi.get(idProduct);
      setProduct(product);
    };

    getProduct();
  }, []);
  return (
    <div>
      <button
        className="text-center px-4 bg-red-400 rounded m-4 p-2 w-full"
        onClick={() => history.goBack()}
      >
        Gô Back
      </button>
      <div className="w-full pb-5">
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-5/6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">Name</label>
              <input
                {...register("name")}
                {...setValue("name", product.name)}
                defaultValue={product.name}
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                Price
              </label>
              <input
                {...register("price")}
                {...setValue("price", product.price)}
                defaultValue={product.price}
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                Category
              </label>
              <select
                className="border border-gray-300 shadow p-3 w-full rounded"
                {...register("category", { required: true })}
                {...setValue("category", product.category)}
                defaultValue={product.category}
              >
                {props.category.map((cate) => {
                  return <option value={cate.id}>{cate.name}</option>;
                })}
              </select>
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                Quantity
              </label>
              <input
                {...register("quantity")}
                {...setValue("quantity", product.quantity)}
                defaultValue={product.quantity}
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                Description
              </label>
              <input
                id="editor"
                {...register("description")}
                {...setValue("description", product.description)}
                defaultValue={product.description}
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                Status
              </label>
              {/* <input
                {...register("status")}
                {...setValue("status", product.status)}
                defaultValue={product.status}
                className="border border-gray-300 shadow p-3 w-full rounded"
              /> */}

              <select
                className="border border-gray-300 shadow p-3 w-full rounded"
                {...register("status", { required: true })}
                {...setValue("status", product.status)}
                defaultValue={product.status}
              >
                <option value="">Choose status</option>
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                Photo
              </label>
              <input
                {...register("photo")}
                {...setValue("photo", product.photo)}
                defaultValue={product.photo}
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>

            <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
