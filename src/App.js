import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from './home/Home.jsx';
import TheNavbar from './navbar/TheNavbar.jsx';
import Login from './login/Login.jsx';
import Error from './home/Error.jsx';
import TableActors from './tables/TableActors.jsx';
const App = () => 
{
  return (
    <>
    <BrowserRouter>
      <Routes> 


        <Route path="/" element={ <TheNavbar/> } >

          <Route path="/actors" element={<TableActors />} />
          
          <Route path="/" element={ <Home/> } />
          
          <Route path="/login" element={ <Login/> } />

          <Route path="*" element={ <Error/> } />  

          <Route path="*" element={ <Navigate replace to="/error" /> } />

        </Route>

      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
