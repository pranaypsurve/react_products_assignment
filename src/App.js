import ProdcutsList from './components/prodcutsList';
import ProductDetails from './components/productDetails';
import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProdcutsList />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='*' element={<h3 className='text-center p-5'>Page not found</h3>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
