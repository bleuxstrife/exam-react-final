import React from 'react';
import PropTypes from 'prop-types';

function NavItem({ title, icon, onClick = null }) {
  return (
    <button type="button" className="button-menu" onClick={onClick}>
      {icon}
      {title}
    </button>
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
