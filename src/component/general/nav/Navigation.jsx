import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { TfiBarChartAlt } from 'react-icons/tfi';
import NavItem from './NavItem';
import NavProfile from './NavProfile';
import { Li } from '../../styled/header';

function Navigation({ authUser = null, signOutHandler }) {
  const navigate = useNavigate();
  const toLogin = () => navigate('/login');
  const toThread = () => navigate('/');
  const toLeaderboard = () => navigate('/leaderboard');

  return (
    <nav>
      <ul>
        {authUser && (
          <Li>
            <NavItem title={authUser?.name} icon={<NavProfile authUser={authUser} />} />
          </Li>
        )}
        <Li>
          <NavItem title="Diskusi" icon={<HiOutlineChatBubbleLeftRight />} onClick={toThread} />
        </Li>
        <Li>
          <NavItem title="LeaderBoards" icon={<TfiBarChartAlt />} onClick={toLeaderboard} />
        </Li>
        {authUser && (
          <Li>
            <NavItem title="Logout" icon={<AiOutlineLogout />} onClick={signOutHandler} />
          </Li>
        )}
        {!authUser && (
          <Li>
            <NavItem title="Login" icon={<AiOutlineLogin />} onClick={toLogin} />
          </Li>
        )}
      </ul>
    </nav>
  );
}
const user = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.defaultProps = {
  authUser: null,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(user),
  signOutHandler: PropTypes.func.isRequired,
};

export default Navigation;
