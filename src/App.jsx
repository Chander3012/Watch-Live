import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landing';
import FreeVideos from './pages/free video';
// import PrivateContent from './pages/PrivateContent';
import PlayVideo from './pages/Playvideos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Free-Videos" element={<FreeVideos />} />
        {/* <Route path="/private" element={<PrivateContent />} /> */}
        <Route path="/playvideo/:id" element={<PlayVideo />} />
      </Routes>
    </Router>
  );
};

export default App;
