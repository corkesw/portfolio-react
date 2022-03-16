import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React} from 'react'
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Contact />
    </BrowserRouter>
  );
}

export default App;
