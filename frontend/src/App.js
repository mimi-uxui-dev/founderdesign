import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";
import Cancel from "./Cancel";
import Privacy from "./components/policies/Privacy";
import Terms from "./components/policies/Terms";
import Imprint from "./components/policies/Imprint";

function App() {
  // just a comment
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="success" element={<Success />} />
        <Route path="canceled" element={<Cancel />} />
        <Route path="/policies/privacy" element={<Privacy />} />
        <Route path="/policies/terms" element={<Terms />} />
        <Route path="/policies/imprint" element={<Imprint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
