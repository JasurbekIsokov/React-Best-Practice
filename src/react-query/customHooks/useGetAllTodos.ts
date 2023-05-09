import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { CACHE_KEY_TODOS } from "../constants/Constants";
import TodoService, { Todo } from "../services/TodoService";

const useGetAllTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: TodoService.getAll,
  });
};

export default useGetAllTodos;
