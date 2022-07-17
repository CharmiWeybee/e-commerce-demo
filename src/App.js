import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './components/Products';
import Registration from './components/Registration';
import Login from './components/Login';
import Logout from './components/Logout';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Products></Products>
      <Routes>
        <Route path="/Registration" element={<Registration />}></Route> 
        <Route path="/Login" element={<Login />} ></Route>         
        {/* <Route path="/Products" element={<Products />} ></Route>          */}
      </Routes>
      {/* <Registration></Registration> */}
      {/* <Login></Login> */}
      {/* <Logout></Logout> */}
    </div>
  );
}

export default App;
