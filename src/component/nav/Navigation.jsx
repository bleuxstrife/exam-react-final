import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { TfiBarChartAlt } from 'react-icons/tfi';
import NavItem from './NavItem';
import NavProfile from './NavProfile';

function Navigation({ authUser = null, signOutHandler }) {
  const nav = useNavigate();
  const toLogin = () => nav('/login');
  const toThread = () => nav('/');
  const toLeaderboard = () => nav('/leaderboard');

  return (
    <nav className="navigation">
      <ul>
        {authUser && (
          <li>
            <NavItem title={authUser?.name} icon={<NavProfile authUser={authUser} />} />
          </li>
        )}
        <li>
          <NavItem title="Diskusi" icon={<HiOutlineChatBubbleLeftRight />} onClick={toThread} />
        </li>
        <li>
          <NavItem title="LeaderBoards" icon={<TfiBarChartAlt />} onClick={toLeaderboard} />
        </li>
        {authUser && (
          <li>
            <NavItem title="Logout" icon={<AiOutlineLogout />} onClick={signOutHandler} />
          </li>
        )}
        {!authUser && (
          <li>
            <NavItem title="Login" icon={<AiOutlineLogin />} onClick={toLogin} />

          </li>
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
