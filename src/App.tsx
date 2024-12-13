import "./global.scss"
import Home from "./pages/Portfolio/Portfolio";
import Intro from './pages/Intro/Intro';
import { Routes, Route } from "react-router-dom";

const App:React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/intro" element={<Intro/>}/>
        <Route path="/portfolio" element={<Home/>}/>

      </Routes>
      
      

      <div className='gradient'></div>
    </div>
  );
}

export default App;
