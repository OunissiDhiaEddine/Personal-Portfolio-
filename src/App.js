import Navbar from "./navbar";
import Hometab from "./hometab";
import Resume from "./Resume";
import Suggestions from "./Suggestions";
import { BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
  return (
        <div className="App">
             <Routes> 
                 <Route path="/" element={<><Hometab/> <Navbar/></>} /> 
                 <Route path="/Resume" element={<Resume />} />
                 <Route path="/Suggestions" element={<Suggestions />} />
             </Routes> 
      </div>
  );
}

export default App;
