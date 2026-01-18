import { BrowserRouter, Routes, Route } from "react-router-dom";
import Daily from "./pages/Daily";
import Weekly from "./pages/Weekly";
import Monthly from "./pages/Monthly";
import AppNavbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Daily />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/monthly" element={<Monthly />} />
      </Routes>
    </BrowserRouter>
  );
}
