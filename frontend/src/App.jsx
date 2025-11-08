import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import ItemView from "./pages/ItemView";
import Navbar from "./components/Navbar";
import "./styles/index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/item/:id" element={<ItemView />} />
      </Routes>
    </BrowserRouter>
  );
}
