import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import axios from "axios";
import Loading from "../components/Loading";
import UsePaginationPostList from "./customHooks/usePaginationPostList";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const GetPaginationTodos = (query: PostQuery) => {
  const pageSize = 10;

  const [page, setPage] = useState(1);

  const {
    data: posts,
    error,
    isLoading,
  } = UsePaginationPostList({ page, pageSize });

  if (isLoading) return <Loading />;

  if (error) return <div className="error-box">{error.message}</div>;

  return (
    <>
      <h2 className="all-todos">Pagination Todos </h2>
      <div className="container">
        {posts?.map((todo, index) => (
          <div className="todo-box" key={index}>
            {todo.title}
          </div>
        ))}
      </div>
      <div className="pagination-btns">
        <button
          className="pagination-btn"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <button className="pagination-btn" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

export default GetPaginationTodos;
