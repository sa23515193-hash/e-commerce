import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import AdminLogin from "./pages/AdminLogin.js";
import AdminDashboard from "./pages/AdminDashboard.js";
import Contact from "./pages/Contact.js";
import Footer from "./components/Footer.js";
import Navbar from "./pages/Navbar.js";
import "./index.css";

function App() {
  return (

      <div className="min-h-screen flex flex-col bg-gray-50">
        <div className="flex-1">
          < Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-login" element={<AdminLogin/>} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        

        </div>
       
      </div>
  );
}

export default App;