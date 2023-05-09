import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const loc = useLocation();

  console.log();

  const checkStyle = {};

  return (
    <div className="header">
      <ul className="navbar">
        <li>
          <Link
            className="navbar-list"
            to={"/"}
            style={{
              backgroundColor: loc.pathname == "/" ? "white" : "",
              color: loc.pathname == "/" ? "blue" : "white",
            }}
          >
            All Todos
          </Link>
        </li>
        <li>
          <Link
            className="navbar-list"
            to={"paginationTodos"}
            style={{
              backgroundColor:
                loc.pathname == "/paginationTodos" ? "white" : "",
              color: loc.pathname == "/paginationTodos" ? "blue" : "white",
            }}
          >
            Pagination Todos
          </Link>
        </li>
        <li>
          <Link
            className="navbar-list"
            to={"selectedTodos"}
            style={{
              backgroundColor: loc.pathname == "/selectedTodos" ? "white" : "",
              color: loc.pathname == "/selectedTodos" ? "blue" : "white",
            }}
          >
            Selected Todos
          </Link>
        </li>
        <li>
          <Link
            className="navbar-list"
            to={"infiniteQueryTodos"}
            style={{
              backgroundColor:
                loc.pathname == "/infiniteQueryTodos" ? "white" : "",
              color: loc.pathname == "/infiniteQueryTodos" ? "blue" : "white",
            }}
          >
            Infinite Query Todos
          </Link>
        </li>
        <li>
          <Link
            className="navbar-list"
            to={"postTodos"}
            style={{
              backgroundColor: loc.pathname == "/postTodos" ? "white" : "",
              color: loc.pathname == "/postTodos" ? "blue" : "white",
            }}
          >
            Post Todos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
