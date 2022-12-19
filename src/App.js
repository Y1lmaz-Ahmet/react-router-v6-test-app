import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BookList from "./components/BookList";
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} />
    </Routes>
  );
}

export default App;
