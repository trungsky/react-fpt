import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import ProductApi from "../api/ProductApi";
import toastr from "toastr";
const ProductAdd = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <input {...register("name")} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-bold text-gray-600">Price</label>
          <input {...register("price")} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-bold text-gray-600">Category</label>
          <input {...register("category")} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-bold text-gray-600">Quantity</label>
          <input {...register("quantity")} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-bold text-gray-600">Description</label>
          <input {...register("description")} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-bold text-gray-600">Status</label>
          <input {...register("status")} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-bold text-gray-600">Photo</label>
          <input {...register("photo")} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
        </div>
        
        <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
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
