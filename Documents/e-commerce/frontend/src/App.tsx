
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import FeedbackForm from "./components/FeedbackForm";
import "./index.css";
function App() {
  return (

      <div className="min-h-screen flex flex-col bg-gray-50">
        <div className="flex-1">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-login" element={<AdminLogin/>} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
          <FeedbackForm />
        </div>
        <Footer />
      </div>
  );
}

export default App;