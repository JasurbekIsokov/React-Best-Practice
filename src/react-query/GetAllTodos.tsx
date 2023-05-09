import { useEffect, useRef } from "react";
import useGetAllTodos from "./customHooks/useGetAllTodos";

import Loading from "../components/Loading";

const GetAllTodos = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  const { data: todos, error, isLoading } = useGetAllTodos();

  if (isLoading) return <Loading />;

  if (error) return <div className="error-box">{error.message}</div>;

  return (
    <>
      <h2 className="all-todos">All Todos: {todos?.length}</h2>
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

export default GetAllTodos;
