import React from "react";
import { NavLink } from "react-router-dom";

const AdminProductList = (props) => {
  const onHandleRemove = (id) => {
    props.onDelete(id);
  };

  return (
    <div>
      <div className="flex flex-col">
        <NavLink
          to="/admin/products/add"
          className="text-center px-4 bg-green-400 rounded m-4 p-2 float-right"
        >
          Thêm sản phẩm
        </NavLink>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {props.products.length !== 0 ? props.products.map((product, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <NavLink to={`products/${product.id}`}>
                              <img
                                className="h-10 w-10 rounded-full"
                                src={product.photo}
                                alt=""
                              />
                            </NavLink>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              <NavLink to={`products/${product.id}`}>
                                {product.name}
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {product.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {product.price}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {product.quantity}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.category}
                      </td>

                      <button
                        className="px-4 bg-red-400 rounded ml-5 mt-4 p-2"
                        onClick={() => onHandleRemove(product.id)}
                      >
                        Delete
                      </button>
                    </tr>
                  )) : <span className="px-4 text-red-400">Không có sản phẩm nào ở đây, vui lòng thêm sản phẩm bằng nút ở trên</span>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <ul>
        {props.products.length !== 0
          ? props.products.map((item, index) => (
              <li key={index}>
                <NavLink className="text-blue-600" to={`/products/${item.id}`}>
                  {item.name}
                </NavLink>
                <button
                  className="px-4 bg-red-400 rounded ml-5 mt-4 p-2"
                  onClick={() => onHandleRemove(item.id)}
                >
                  Delete
                </button>
              </li>
            ))
          : "Không có sản phẩm lào kả"}
      </ul> */}
    </div>
  );
};
export default AdminProductList;
