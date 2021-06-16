import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import ProductApi from "../api/ProductApi";
import CategoryApi from "../api/CategoryApi";
import toastr from "toastr";
const ProductAdd = (props) => {
  const history = useHistory();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const { idProduct } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await ProductApi.get(idProduct);
      setProduct(product);
    };

    const getCategory = async () => {
      const { data: category } = await CategoryApi.getAll();
      setCategory(category);
    };

    getCategory();
    getProduct();
  }, []);

  const onSubmit = async (data) => {
    try {
      const { data: newProducts } = await ProductApi.add(data);
      props.onAdd([...props.products, newProducts]);
      toastr.success(`Add thành công`);
      history.push("/admin/products");
    } catch (error) {
      toastr.error(`Đã gặp lỗi: ${error.message}`);
    }
  };
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
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                Price
              </label>
              <input
                {...register("price")}
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
              >
                <option value="">Choose category</option>
                {category.map((cate) => {
                  return <option value={cate._id}>{cate.name}</option>;
                })}
              </select>
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                Quantity
              </label>
              <input
                {...register("quantity")}
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                Description
              </label>
              <input
                {...register("description")}
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>
            <div className="mb-5">
              <select
                className="border border-gray-300 shadow p-3 w-full rounded"
                {...register("status")}
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

  // const [inputValue, setInputValue] = useState("");
  // const onHandleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { data: newProducts } = await ProductApi.add({ name: inputValue });
  //   props.onAdd([...props.products, newProducts]);
  //   setInputValue("");
  // };

  // const onHandleChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // return (
  //   <div>
  //     <form onSubmit={onHandleSubmit}>
  //       <input
  //         type="text"
  //         value={inputValue}
  //         onChange={onHandleChange}
  //         placeholder="Nhập tên sản phẩm"
  //       />
  //       <button type="submit">Add</button>
  //     </form>
  //     <ProductList {...props}/>
  //   </div>
  // );
};

export default ProductAdd;
