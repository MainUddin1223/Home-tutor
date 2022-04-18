import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/Home/About/About';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Details from './Pages/Home/Details/Details';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Services from './Pages/Home/Services/Services';
import Feedback from './Pages/Home/Feedback/Feedback';
import Confirmed from './Pages/Home/Confirmed/Confirmed';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/service" element={<Services></Services>}></Route>
        <Route path="/feedback" element={<Feedback></Feedback>}></Route>
        <Route path="/service/:detailId" element=
          {
            <RequireAuth>
              <Details></Details>
            </RequireAuth>
          }></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="/confirmed" element={<Confirmed></Confirmed>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
