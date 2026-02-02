import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Insights from "./components/Insights";
import ContactForm from "./components/ContactForm";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
     
    </Router>
  );
}

export default App;

