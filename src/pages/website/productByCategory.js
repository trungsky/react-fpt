import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategoryApi from "../../api/CategoryApi";
import ProductApi from "../../api/ProductApi";
import { PriceFormat } from "../../components/constant";

const ProductByCategory = () => {
  const { idCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});

  useEffect(() => {
    const getProductsByCategory = async () => {
      const { data: handleProducts } = await ProductApi.getByCategory(
        idCategory
      );
      console.log(handleProducts);

      setProducts(handleProducts);
    };
    const getCategory = async () => {
      const { data: category } = await CategoryApi.get(idCategory);
      setCategory(category);
    };


    getCategory();
    getProductsByCategory();
  }, [idCategory]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 ml-5 text-gray-900">
              {category.name}
            </h1>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            {category.description}
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          {products.map((product, index) => {
            return (
              <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Link to={`/products/${product._id}`}>
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
                    <Link to={`/products/${product._id}`}>{product.name}</Link>
                  </h2>
                  <p className="leading-relaxed text-base">
                    C??i gi?? ph???i tr???:{" "}
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
    </section>
  );
};

export default ProductByCategory;
