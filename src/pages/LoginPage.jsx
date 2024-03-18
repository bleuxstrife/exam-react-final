import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../component/input/LoginInput';
import { asyncSetAuthUser } from '../states/auth/action';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const callback = () => {
    navigate(-1);
  };

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password, callback }));
  };

  return (
    <section className="input-login">
      <h2>Silahkan masuk untuk menggunakan aplikasi</h2>
      <LoginInput loginHandler={onLogin} />
      <p>
        Belum punya akun?
        <Link to="/register"> Silahkan daftar disini</Link>
      </p>
    </section>
  );
}

export default LoginPage;
