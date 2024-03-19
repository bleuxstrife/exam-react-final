import React from 'react';
import {
  Navigate, Route, Routes, useNavigate,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from './component/general/nav/Navigation';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { asyncUnsetAuthUser } from './states/auth/action';
import { asyncPreloadProcess } from './states/preload/action';
import Loading from './component/general/loading/Loading';
import LeaderboardPage from './pages/LeaderboardPage';
import ThreadPage from './pages/ThreadPage';
import AddThreadPage from './pages/AddThreadPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import { TitleBar, TopBar } from './component/styled/navigation';
import { AppContainer, MainContainer } from './component/styled/container';

function App() {
  const authUser = useSelector((states) => states.authUser);
  const isPreload = useSelector((states) => states.isPreload);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/');
  };

  if (isPreload) {
    return null;
  }

  return (
    <AppContainer>
      <header>
        <TopBar>
          <TitleBar>Forum App</TitleBar>
          <Navigation authUser={authUser} signOutHandler={onSignOut} />
        </TopBar>
        <Loading />
      </header>
      <MainContainer>
        <Routes>
          <Route path="/" element={<ThreadPage />} />
          <Route path="/threads/:id" element={<ThreadDetailPage />} />
          {authUser && <Route path="/add-thread" element={<AddThreadPage />} />}
          {!authUser && <Route path="/login" element={<LoginPage />} />}
          {!authUser && <Route path="/register" element={<RegisterPage />} />}
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </MainContainer>

    </AppContainer>
  );
}

export default App;
