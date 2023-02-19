import './App.css';
import Sign_up from './Components/Sign_up/Form';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import LoginClient from './Components/LoginClient/LoginClient';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  let footerStyle = {
    minHeight: "75.2vh",
    margin: "50px auto",
  };
  return (
      <>
        {/* <Create></Create>
      <GetInvestments></GetInvestments>
      <Read></Read>
      <Update></Update> */}
         
{/* <UserInfo></UserInfo> */}
      
        {/* <Navbar></Navbar>  */}
      {/* <div style={footerStyle}>  */}
      <Routes>
         {/* <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/services" element={<Services/>}>  </Route>
      <Route exact path="/about" element={<About/>}>  </Route>
        <Route exact path="/login" element={<Login/>}>  </Route>
        <Route exact path="/loginc" element={<LoginClient/>}>  </Route>
        <Route  exact path="/SignUp" element={<Sign_up/>}></Route>   */}

<Route exact path="/" element={<Create/>}>  </Route>
<Route exact path="/read" element={<Read/>}>  </Route>
<Route exact path="/update" element={<Update/>}>  </Route>



        
      </Routes>
       {/* </div>
       <Footer></Footer>   */}

      </>
  );
}

export default App;
