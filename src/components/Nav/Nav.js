/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import NavItem from "./NavItem";
import { NavWrapper } from './Nav.styles';

const Nav = ({ navList }) => {
  const [activeTab, setActiveTab] = useState('');
  const location = useLocation();

  useEffect(() => {
    let activeTabTitle = navList[0].title;
    const pathName = location?.pathname.split('/')[2];
    if(pathName?.length > 0 && pathName === 'recipes-list') activeTabTitle = navList[1].title
    setActiveTab(activeTabTitle);
  }, []);

  const setActiveTabStatus = title => {
    setActiveTab(title);
  };

  return (
    <NavWrapper>
      {navList.map((item, ind) => (
        <NavItem title={item.title} key={ind} to={item.path} onClick={setActiveTabStatus} isCurrentTabActive={activeTab === item.title}/>
      ))}
    </NavWrapper>
  )
}

Nav.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Nav;