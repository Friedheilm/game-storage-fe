import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GamesList from './GamesList'; // Replace with your component file names
import AddGame from './AddGame'; // Replace with your component file names

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GamesList />} />
        <Route path="/add-game" element={<AddGame/>} />
        {/* Add more Route components for other pages or components */}
      </Routes>
    </Router>
  );
};

export default AppRouter;