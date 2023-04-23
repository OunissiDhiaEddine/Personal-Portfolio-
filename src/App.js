import Navbar from "./navbar";
import Hometab from "./hometab";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
  return (
        <div className="App">
          <Navbar></Navbar>
          <Hometab></Hometab>
      </div>
  );
}

export default App;
