import { useState } from "react";

import Loading from "../components/Loading";
import useGetSelectedTodos from "./customHooks/useGetSelectedTodos";

const GetSelectedTodos = () => {
  const [userId, setUserId] = useState<number>();

  const { data: todos, error, isLoading } = useGetSelectedTodos(userId);

  if (isLoading) return <Loading />;

  if (error) return <div className="error-box">{error.message}</div>;

  return (
    <>
      <div className="selectBox">
        <select
          className="select"
          onChange={(event) => setUserId(parseInt(event.target.value))}
          value={userId}
        >
          <option value="" className="option">
            All Post List
          </option>
          <option value="1" className="option">
            User 1
          </option>
          <option value="2" className="option">
            User 2
          </option>
          <option value="3" className="option">
            User 3
          </option>
        </select>
      </div>
      <div className="container">
        {todos?.map((todo, index) => (
          <div className="todo-box" key={index}>
            {todo.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default GetSelectedTodos;
