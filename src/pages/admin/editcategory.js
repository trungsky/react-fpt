import React from "react";
import CategoryEdit from "../../components/CategoryEdit";

const EditCategoryPage = (props) => {
  return (
    <div>
      <CategoryEdit props={props.category} onAddCategory={props.onAddCategory}/>
    </div>
  );
};

export default EditCategoryPage;
