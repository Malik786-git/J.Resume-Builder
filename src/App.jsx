import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home';
import Build from './components/Build';
import Resume from './components/Resume';
import About from './components/About';
import GlobalProvider from "./context/context";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>

    <GlobalProvider>
     <BrowserRouter>
        <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/build' element={<Build/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/about' element={<About/>}/>
       </Routes>
       <Footer/>
     </BrowserRouter>
    </GlobalProvider>

    </>
  );
}



export default App;