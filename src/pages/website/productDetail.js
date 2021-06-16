import React, { useState, useEffect } from "react";
import ProductApi from "../../api/ProductApi";
import CategoryApi from "../../api/CategoryApi";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PriceFormat } from "../../components/constant";
import toastr from "toastr";
const ProductDetail = (props) => {
  const [products, setProducts] = useState([]);
  const [sameCate, setSameCate] = useState([]);
  const [category, setCategory] = useState({});
  const [cart, setCart] = useState([]);
  const { idProduct } = useParams();
  const textAlignLast = {
    "text-align-last": "center",
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await ProductApi.get(idProduct);
      setProducts(product);
      const { data: sameCateProduct } = await ProductApi.sameCate(
        product.category
      );
      setSameCate(sameCateProduct);
      const getNameCategory = async () => {
        const { data: cate } = await CategoryApi.get(product.category);
        setCategory(cate);
      };
      getNameCategory();
      document.querySelector("#descId").innerHTML = product.description;
    };
    getProduct();
  }, [idProduct]);

  // useEffect(() => {
  //   const refreshCart = async () => {
  //     carts = JSON.parse(localStorage.getItem("cart"));
  //     setCart(carts);
  //     console.log(props.carts);
  //   };
  //   refreshCart();
  // }, []);

  var carts = [];

  const addToCart = (res) => {
    const { id, name, price, quantity, photo } = res;
    toastr.success(`Add thành công ${name}`);

    const saveCart = () => {
      localStorage.setItem("cart", JSON.stringify(carts));
    };
    const loadCart = () => {
      carts = JSON.parse(localStorage.getItem("cart"));
      setCart(carts);
    };
    if (localStorage.getItem("cart") != null) {
      loadCart();
    }

    const addItemToCart = (id) => {
      for (var item in carts) {
        if (carts[item].id === id) {
          carts[item].quantity++;
          saveCart();
          return;
        }
      }
      var item = res;
      carts.push(item);
      saveCart();
    };

    addItemToCart(id, name, price, quantity, photo);
  };
  return (
    <div>
      <div className="bg-white shadow-sm sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
          {/* Search Mobile */}
          <div className="relative md:hidden">
            <input
              type="search"
              className="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
              placeholder="Search"
            />
            <svg
              className="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {/* ./ Search Mobile */}
        </div>
      </div>
      <div className="py-6">
        {/* Breadcrumbs */}

        {/* ./ Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <img
                    src={products.photo}
                    className="h-264 w-full rounded md:h-80"
                    alt={products.name}
                  />
                </div>
              </div>
            </div>

            <div className="md:flex-1 px-4">
              <form onSubmit={handleSubmit(addToCart)}>
                <input
                  {...register("id")}
                  {...setValue("id", products._id)}
                  hidden
                />

                <input
                  {...register("photo")}
                  {...setValue("photo", products.photo)}
                  hidden
                />

                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  {products.name}
                  <input
                    {...register("name")}
                    {...setValue("name", products.name)}
                    hidden
                  />
                </h2>
                <p className="text-gray-500 text-sm">
                  By{" "}
                  <Link
                    className="hover:no-underline"
                    to={`/category/${category._id}`}
                  >
                    {category.name}
                  </Link>
                  <input
                    {...register("category")}
                    {...setValue("category", products.category)}
                    hidden
                  />
                </p>
                <div className="flex items-center space-x-4 my-4">
                  <div>
                    <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span className="font-bold text-indigo-600 text-3xl">
                        {PriceFormat(products.price)}
                        <input
                          {...register("price")}
                          {...setValue("price", products.price)}
                          hidden
                        />
                      </span>
                      <span className="text-indigo-400 mr-1 mt-1">đ</span>
                    </div>
                  </div>
                  {/* <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Save 12%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Inclusive of all Taxes.
                  </p>
                </div> */}

                  <input
                    {...register("quantity")}
                    {...setValue("quantity", 1)}
                    hidden
                  />
                </div>
                <p className="text-gray-500">{products.desc}</p>
                <div className="flex py-4 space-x-4">
                  <button
                    type="submit"
                    className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                    id="btnAddToCart"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Same product */}
      <div className="bg-gray-100 rounded mx-10">
        <div className="mx-5 my-10 ">
          <p className="text-[32px] font-bold"> Description</p>
          <div id="descId"></div>
        </div>
      </div>

      <span className="ml-12 font-bold text-[32px]">Sêm product</span>
      <div className="flex flex-wrap">
        {sameCate.map((product, index) => (
          <div key={index} className="flex px-12 py-6">
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div
                className="w-1/3 bg-cover"
                style={{
                  backgroundImage: `url("${product.photo}")`,
                }}
              ></div>
              <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                  <Link to={`/products/${product._id}`}>{product.name}</Link>
                </h1>
                <p className="mt-2 text-gray-600 text-sm min-w-[500px]">
                  {product.description}
                </p>
                <div className="flex item-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">
                    {product.price}
                  </h1>
                  <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                    Add to Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* End same product */}
    </div>
  );
};
export default ProductDetail;
