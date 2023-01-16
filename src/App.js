import Navbar from "./components/Navbar";
import Team from "./components/pages/Team";
import Footer from "./components/Footer";
import AboutUs from "./components/pages/AboutUs";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
