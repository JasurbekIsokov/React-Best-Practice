import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Post } from "./usePaginationPostList";

const useGetSelectedTodos = (userId: number | undefined) =>
  useQuery<Post[], Error>({
    queryKey: userId ? ["todos", userId] : ["todos"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/todos", {
          params: {
            userId,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 1000,
  });

export default useGetSelectedTodos;
