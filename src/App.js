import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes, Route  } from 'react-router-dom';
import HomePage from './Home/HomePage'

function App() {
  return (
 
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {<HomePage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
