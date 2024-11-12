import './index.css';
import Home from './Pages/Home';
import AddBook from './Pages/AddBook';
import ViewBook from './Pages/ViewBook';
import EditBook from './Pages/EditBook';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/addBook" exact element={<AddBook />} />
      <Route path="/editBook/:id" exact element={<EditBook />} />
      <Route path="/viewBook/:id" exact element={<ViewBook />} />
    </Routes>
  );
}

export default App;
