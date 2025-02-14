import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./page/landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./page/about";
import ServicesPage from "./page/service";
import TrainingsPage from "./page/capacita";
import DS160Form from "./page/ds-16";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/capacitaciones" element={<TrainingsPage />} />
          <Route path="/Ds16" element={<DS160Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
