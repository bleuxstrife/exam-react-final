import React from 'react';
import {
  Navigate, Route, Routes, useNavigate,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from './component/nav/Navigation';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { asyncUnsetAuthUser } from './states/auth/action';
import { asyncPreloadProcess } from './states/preload/action';
import Loading from './component/loading/Loading';
import LeaderboardPage from './pages/LeaderboardPage';
import ThreadPage from './pages/ThreadPage';
import AddThreadPage from './pages/AddThreadPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import NotFoundPage from './pages/NotFoundPage';

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
    <div className="app-container">
      <header>
        <div className="top-bar">
          <h2>Forum App</h2>
          <Navigation authUser={authUser} signOutHandler={onSignOut} />
        </div>
        <Loading />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ThreadPage />} />
          <Route path="/threads/:id" element={<ThreadDetailPage />} />
          {authUser && <Route path="/add-thread" element={<AddThreadPage />} /> }
          {!authUser && <Route path="/login" element={<LoginPage />} />}
          {!authUser && <Route path="/register" element={<RegisterPage />} />}
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
