import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Category from './components/Category';
import Cart from './components/Cart';
import Producte from './components/Producte';
import Productf from './components/Productf';
import Producth from './components/Producth';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
// import first from './components/trial/first';
// https://Gaurav05082002.github.io/commerceweb/  is website link 
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
     <switch>
     <Routes>
     <Route path="/" element={<Home/>} exact />
      <Route path="/CATEGORY" element={<Category/>} />
      <Route path="/CART" element={<Cart/>} />
      <Route path="/PRODUCTE" element={<Producte/>} exact />
      <Route path="/PRODUCTF" element={<Productf/>} />
      <Route path="/PRODUCTH" element={<Producth/>} />
     {/* <Home /> */}
     {/* <Category /> */}
     {/* <Cart /> */}
     </Routes>
     </switch>
     </BrowserRouter>
     {/* <first/> */}
    </div>
  );
}

export default App;
