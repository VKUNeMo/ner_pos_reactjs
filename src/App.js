import Footer from './Components/Footer';
import "./App.css"
import Navbar from './Components/Navbar';
import PageAbout from './Components/About/PageAbout';
import PageHome from './Components/Home/PageHome';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className='w-full min-h-screen flex-col relative'>
          <div className='fixed w-full shadow-custom z-50'>
            <Navbar></Navbar>
          </div>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
          </Routes>
          <div className='absolute bottom-0 w-full my-2'>
            <Footer></Footer>
          </div>
        </div>
      </Router>

    </>
  );
}

export default App;
