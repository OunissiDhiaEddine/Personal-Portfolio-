import Navbar from "./navbar";
import Hometab from "./hometab";
import Resume from "./Resume";
import { BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
  return (
        <div className="App">
             <Routes> 
                 <Route path="/" element={<><Hometab/> <Navbar/></>} /> 
                 <Route path="/Resume" element={<Resume />} />
             </Routes> 
      </div>
  );
}

export default App;
