import "./App.css";
import Navbar from "./comonents/Nevbar.jsx";
import News from "./comonents/News.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News key="general" pageSize={12} category="general" />} />
        <Route exact path="/business" element={<News key="business" pageSize={12} category="business" />} />
        <Route exact path="/entertainment" element={<News key="" pageSize={12} category="entertainment" />} />
        <Route exact path="/health" element={<News key="health" pageSize={12} category="health" />} />
        <Route exact path="/science" element={<News key="science" pageSize={12} category="science" />} />
        <Route exact path="/sports" element={<News key="sports" pageSize={12} category="sports" />} />
        <Route exact path="/technology" element={<News key="technology" pageSize={12} category="technology" />} />
      </Routes>
    </Router>
  );
}

export default App;

// key k bina compunent auto ubdate mhi hogy refresh krna pdyga 