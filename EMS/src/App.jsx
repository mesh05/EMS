import { RecoilRoot, atom } from "recoil";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Home from "./component/home.jsx";
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import Contact from "./component/Contact";
import About from "./component/About";
import Staff from "./component/Staff";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/staff/me" element={<Staff />} />
          <Route path="/staff/me" element={<Staff />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
