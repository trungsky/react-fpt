import React, { useEffect, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";
const AdminCategoryList = (props) => {
  const onHandleRemove = (id) => {
    props.onDeleteCategory(id);
  };

  const user = isAuthenticated();
  return (
    <div>
      {user === false ? <Redirect to="/" /> : ""}

      <div className="flex flex-col">
        <NavLink
          to="/admin/category/add"
          className="text-center px-4 bg-green-400 rounded m-4 p-2 float-right"
        >
          Thêm category
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
                      ID
                    </th>
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
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {props.category.length !== 0 ? (
                    props.category.map((cate, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                <NavLink to={`category/${cate.id}`}>
                                  {cate.id}
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            <NavLink to={`category/${cate.id}`}>
                              {cate.name}
                            </NavLink>
                          </div>
                        </td>

                        {/* <td className="px-6 py-4 whitespace-nowrap">
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
                      </td> */}

                        <button
                          className="px-4 bg-red-400 rounded p-2 mt-1"
                          onClick={() => onHandleRemove(cate.id)}
                        >
                          Delete
                        </button>
                      </tr>
                    ))
                  ) : (
                    <span className="px-4 text-red-400">
                      Không có category nào ở đây, vui lòng thêm category bằng
                      nút ở trên
                    </span>
                  )}
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
export default AdminCategoryList;
