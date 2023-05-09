import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/home.css";

import Home from "./pages/Home";
import PostTodos from "./react-query/PostTodos";
import GetAllTodos from "./react-query/GetAllTodos";
import GetSelectedTodos from "./react-query/GetSelectedTodos";
import GetPaginationTodos from "./react-query/GetPaginationTodos";
import GetInfiniteQueryTodos from "./react-query/GetInfiniteQueryTodos";

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/" element={<GetAllTodos />} />
        <Route path="/paginationTodos" element={<GetPaginationTodos />} />
        <Route path="/selectedTodos" element={<GetSelectedTodos />} />
        <Route path="/infiniteQueryTodos" element={<GetInfiniteQueryTodos />} />
        <Route path="/postTodos" element={<PostTodos />} />
      </Routes>
    </Router>
  );
}

export default App;
