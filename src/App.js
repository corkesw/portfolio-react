import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React} from 'react'
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact"
import "./App.css"
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
