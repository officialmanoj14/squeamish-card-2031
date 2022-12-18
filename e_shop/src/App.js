import './App.css';
// import BackgroundStructure from './Components/Login/BackgroundStructure';
// import Navbar from './Components/Navbar';
// import PasswordModal from './Components/Login/PasswordModal';
// import ResetPassword from './Components/Login/ResetPassword';
import { Cart } from "./Components/Pages/Cart/Cart";
import { ProductsPage } from './Components/Pages/Products/ProductsPage';
import SingleProducts from './Components/Pages/Products/SingleProducts';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <BackgroundStructure/> */}
      {/* <PasswordModal /> */}
      {/* <ResetPassword/> */}

      <Cart/>
      <ProductsPage/>
      <SingleProducts/>
    </div>
  );
}

export default App;
