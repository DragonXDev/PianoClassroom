import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import LessonsPage from './pages/LessonsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </Router>
  );
}

export default App;
