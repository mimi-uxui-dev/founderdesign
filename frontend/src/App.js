import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";
import Cancel from "./Cancel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="success" element={<Success />} />
        <Route path="canceled" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
