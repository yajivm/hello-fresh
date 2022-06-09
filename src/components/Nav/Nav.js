import { useState } from 'react';
import PropTypes from 'prop-types';
import NavItem from "./NavItem";
import { NavWrapper } from './Nav.styles';

const Nav = ({ navList }) => {
  const [activeTab, setActiveTab] = useState(navList[0].title);

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