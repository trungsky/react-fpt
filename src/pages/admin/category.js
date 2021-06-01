import React from "react";
import AdminCategoryList from "../../components/AdminCategoryList";
const CategoryList = (props) => {
  const onHandleRemove = (id) => {
    props.onDeleteCategory(id);
  };

  return (
    <div>
      <AdminCategoryList
        category={props.category}
        onDeleteCategory={(props) => onHandleRemove(props)}
      />
    </div>
  );
};
export default CategoryList;
