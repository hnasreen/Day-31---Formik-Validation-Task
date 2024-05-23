import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Book from './Component/Book';
import Author from './Component/Author';
import AddBook from './Component/AddBook';
import EditBook from './Component/EditBook';
import AddAuthor from './Component/AddAuthor';
import EditAuthor from './Component/EditAuthor';

const App = () => {
 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/editBook/:id" element={<EditBook />} />
          <Route path="/author" element={<Author />} />
          <Route path="/addAuthor" element={<AddAuthor />} />
          <Route path="/editAuthor/:id" element={<EditAuthor />} />
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;