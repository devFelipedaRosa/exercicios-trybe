import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CoffeeList from "./pages/CoffeeList";
import Coffee from "./pages/Coffee";
import { Link } from 'react-router-dom';
import NavBar from "./components/nav-bar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element = { <Home />} />
        <Route path="/coffees" element = { <CoffeeList /> } />
        <Route path="/coffees/:coffee" element={ <Coffee /> } />
      </Routes>

    </>
  )
}

export default App
