import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  useParams,
  useHistory,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import CategoryApi from "../api/CategoryApi";
import toastr from "toastr";
import { isAuthenticated } from "../auth";
import NotFoundPage from "../pages/404";
const CategoryEdit = (props) => {
  const { idCategory } = useParams();
  const [category, setCategory] = useState([]);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await CategoryApi.update(idCategory, data);
      const { data: category } = await CategoryApi.getAll();
      props.onAddCategory([...category]);
      toastr.success(`Edit category thành công`);
      history.push("/admin/category");
    } catch (error) {
      toastr.error(`Đã gặp lỗi: ${error.message}`);
    }
  };

  useEffect(() => {
    const getCategory = async () => {
      const { data: cate } = await CategoryApi.get(idCategory);
      setCategory(cate);
    };

    getCategory();
  }, []);
  const { user } = isAuthenticated();
  if (user.role !== 1) {
    return <NotFoundPage />;
    console.log("alo");
  }
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
                {...setValue("name", category.name)}
                defaultValue={category.name}
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">Description</label>
              <input
                {...register("description")}
                {...setValue("description", category.description)}
                defaultValue={category.description}
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

export default CategoryEdit;
