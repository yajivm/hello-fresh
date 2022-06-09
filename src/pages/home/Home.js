import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from '../../components/Menu';
import Recipie from '../../components/Recipe';
import Nav from '../../components/Nav';
import { NAV_LIST, MENU_PATH, RCEIPIE_PATH } from '../../utils/constant';
import { Container } from './Home.styles';

const Home = () => {
  return (
    <Container>
        <Nav navList={NAV_LIST} />
        <Routes>
          <Route exact path={MENU_PATH} element={<Menu />} />
          <Route exact path={RCEIPIE_PATH} element={<Recipie />} />
        </Routes>
    </Container>
  );
}

export default Home;
