import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { PriceFormat } from "../../components/constant";
import ProductApi from "../../api/ProductApi";

import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

const ProductByPage = ({ products }) => {
  const [productsState, setProductsState] = useState([]);
  let history = useHistory();

  const { page } = useParams();
  const [pageState, setPageState] = useState();
  const [countProductState, setCountProductState] = useState();

  useEffect(() => {
    const getProductByPage = () => {
      const handleProduct = async () => {
        setPageState(page);
        const { data: product } = await ProductApi.getAllWithPage(page, 8);
        const ProductLength = Math.ceil(products.length / 8);
        console.log(product.length);
        setCountProductState(ProductLength);
        setProductsState(product);
        if (product.length === 0) {
          console.log("Redirect về 404");
          window.location = "/404";
        }
      };
      handleProduct();
    };
    getProductByPage();
  }, [page]);

  const handleChange = (event, value) => {
    setPageState(value);
    history.push(`/products/page/${value}`);
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Page {page}
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven&apos;t heard of them man bun deep jianbing selfies heirloom
              prism food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {productsState.map((product, index) => {
              return (
                <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <Link to={`/products/${product.id}`}>
                      <img
                        className="h-60 rounded w-full object-cover object-center mb-6"
                        src={product.photo}
                        alt={product.name}
                      />
                    </Link>
                    {/* <h3
                      className={`tracking-widest text-500 text-xs font-medium title-font`}
                    >
                      {product.category}
                    </h3> */}
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </h2>
                    <p className="leading-relaxed text-base">
                      Cái giá phải trả:{" "}
                      <span className="text-red-400">
                        {PriceFormat(product.price)}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center flex justify-center">
          <Typography>Page: {pageState}</Typography>
          <Pagination
            count={countProductState}
            page={page}
            onChange={handleChange}
          />
        </div>
      </section>
    </div>
  );
};

export default ProductByPage;
