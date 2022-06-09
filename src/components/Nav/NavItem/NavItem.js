import PropTypes from 'prop-types';
import { NavTitle } from './NavItem.styles'

const NavItem = ({ title, isCurrentTabActive, to, onClick }) => {
  return (
    <NavTitle
      iscurrenttabactive={isCurrentTabActive}
      to={to}
      onClick={() => onClick(title)}
      data-testid={title}
    >
      {title}
    </NavTitle>
  )
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  isCurrentTabActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItem