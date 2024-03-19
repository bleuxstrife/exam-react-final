import React from 'react';
import PropTypes from 'prop-types';
import StyledIcon from '../../styled/icon.tsx';

function VoteIcon({ iconSize, icon }) {
  const size = `${iconSize}px`;
  return (
    <StyledIcon iconSize={size}>
      {icon}
    </StyledIcon>
  );
}

VoteIcon.defaultProps = {
  iconSize: 18,
};

VoteIcon.propTypes = {
  iconSize: PropTypes.number,
  icon: PropTypes.element.isRequired,
};

export default VoteIcon;
