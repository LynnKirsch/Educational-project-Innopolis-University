import {Routes, Route, Outlet} from "react-router-dom";
import Header from './components/Header';
import CardList from "./Pages/CardList";
import Footer from "./components/Footer";
import Blog from "./Pages/Blog";
import Authors from "./Pages/Authors";
import Cart from "./Pages/Cart";


const App = () => {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<CardList/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/authors' element={<Authors/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Route>
        </Routes>
      </div>

  );
}

const Layout = () => {
  return (
      <div>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
  )
};

export default App;
