import { Route, Routes, NavLink } from "react-router-dom";

import Home from "./components/Home";
import BookList from "./components/BookList";
import Book from "./components/Book";
import NotFound from "./components/NotFound";
import NewBook from "./components/NewBook";
export function App() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "gray",
          padding: 50,
        }}
      >
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({ color: isActive ? "red" : "orange" })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="books"
              style={({ isActive }) => ({ color: isActive ? "red" : "orange" })}
            >
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* Routes = container for holding individual Route */}
        <Route path="/" element={<Home />} />
        <Route path="/books">
          {/* Nested Route books = parent */}
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
