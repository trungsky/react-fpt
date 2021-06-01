import React from "react";
import CategoryAdd from "../../components/CategoryAdd";
const AddCategoryPage = (props) => {
  return (
    <div>
      <CategoryAdd category={props.category} onAddCategory={props.onAddCategory} />
    </div>
  );
};

export default AddCategoryPage;
