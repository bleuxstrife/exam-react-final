import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from '../states/auth/action';
import RegisterInput from '../component/general/input/RegisterInput';

function RegisterPage() {
  const loginPath = '/login';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));
    navigate(loginPath);
  };

  return (
    <section className="input-register">
      <h2>Isi form untuk mendaftar akun</h2>
      <RegisterInput registerHandler={onRegister} />
      <p>
        Sudah punya akun?
        <Link to={loginPath}>Masuk disini</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
