import React from 'react';
import PropTypes from 'prop-types';

function NavProfile({ authUser = null }) {
  return <img src={authUser?.avatar} alt={authUser?.id} title={authUser?.name} />;
}

const user = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

NavProfile.defaultProps = {
  authUser: null,
};

NavProfile.propTypes = {
  authUser: PropTypes.oneOfType([() => null, PropTypes.shape(user)]),
};

export default NavProfile;
