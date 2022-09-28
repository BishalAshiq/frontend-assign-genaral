import './App.css';
import Home from './Components/Home/Home/Home';
import ActivePageOne from "./Components/CreatingActivity/ActivePageOne";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/activePageOne" element={<ActivePageOne/>} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
