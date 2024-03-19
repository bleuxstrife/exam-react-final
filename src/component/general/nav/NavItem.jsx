import React from 'react';
import PropTypes from 'prop-types';
import { NavButton } from '../../styled/navigation';

function NavItem({ title, icon, onClick = null }) {
  return (
    <NavButton type="button" onClick={onClick}>
      {icon}
      {title}
    </NavButton>
  );
}

NavItem.defaultProps = {
  onClick: null,
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

export default NavItem;
