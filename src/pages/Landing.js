import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RECIPE_DETAILS } from '../utils/constant';
import Home from './home';
import RecipeDetails from './recipeDetails';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path={RECIPE_DETAILS} element={<RecipeDetails />} />
        </Routes>
      </Router>
  );
}

export default App;