import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import BookList from "./components/BookList";
import Book from "./components/Book";
export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* Routes = container for holding individual Route */}
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
