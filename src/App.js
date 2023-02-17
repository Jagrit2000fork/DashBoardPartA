import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
     <div className="container">
      <Router>
        <Routes>
        <Route exact path="/" element={ <Create/>}/>
        <Route exact path="/read" element={<Read/>}/>
        <Route exact path="/update" element={<Update/>}/>
        </Routes>
      </Router>
     
     </div>
  );
}

export default App;
