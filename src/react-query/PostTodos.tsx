{
  /* <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" className="form-input" ref={ref} />
        <button className="add-btn">Add</button>
      </form> */
}
import React from "react";

const PostTodos = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" className="form-input" />
      <button className="add-btn">Add</button>
    </form>
  );
};

export default PostTodos;
