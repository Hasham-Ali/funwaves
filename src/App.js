import './App.css';
import { Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NavBar from './Components/Navbar/Navbar';
import Games from './Pages/Games/Games';
import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import Softwares from './Pages/Softwares/Softwares';
import Hollywood from './Pages/Hollywood/Hollywood';
import Bollywood from './Pages/Bollywood/Bollywood';
import Footer from './Components/Footer/Footer';
import Dubmovies from './Pages/Dub movies/Dubmovies';


function App() {
  return (

    <div className="App">

      <NavBar/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/movies' element={<Movies/>}/>
        <Route exact path='/games' element={<Games/>}/>
        <Route exact path='/softwares' element={<Softwares/>}/>
        <Route exact path='/hollywood' element={<Hollywood/>}/>
        <Route exact path='/bollywood' element={<Bollywood/>}/>
        <Route exact path='/dubmovies' element={<Dubmovies/>}/>

      </Routes>

      <Footer/>

    </div>
  );
}

export default App;