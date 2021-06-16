import React from "react";
import CategoryAdd from "../../components/CategoryAdd";
import { isAuthenticated } from "../../auth";
import NotFoundPage from "../404";
const AddCategoryPage = (props) => {

  return (
    <div>
      <CategoryAdd
        category={props.category}
        onAddCategory={props.onAddCategory}
      />
    </div>
  );
};

export default AddCategoryPage;
