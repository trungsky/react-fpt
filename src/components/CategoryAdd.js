import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import CategoryApi from "../api/CategoryApi";
import { isAuthenticated } from "../auth";
import NotFoundPage from "../pages/404";
import toastr from "toastr";
const CategoryAdd = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = isAuthenticated();
  if (user.role !== 1) {
    return <NotFoundPage />;
    console.log("alo");
  }
  const onSubmit = async (data) => {
    try {
      const { data: newCategory } = await CategoryApi.add(data);
      props.onAddCategory([...props.category, newCategory]);
      toastr.success(`Add category thành công`);
      history.push("/admin/category");
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
              <label className="block mb-2 font-bold text-gray-600">
                Name category
              </label>
              <input
                {...register("name")}
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 font-bold text-gray-600">
                Description category
              </label>
              <input
                {...register("description")}
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

export default CategoryAdd;
