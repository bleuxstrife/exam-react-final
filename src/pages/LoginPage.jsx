import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../component/general/input/LoginInput';
import { asyncSetAuthUser } from '../states/auth/action';
import { CustomLink, H2Label, PLabel } from '../component/styled/label';
import { PageContainer } from '../component/styled/container';

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
    <PageContainer>
      <H2Label>Silahkan masuk untuk menggunakan aplikasi</H2Label>
      <LoginInput loginHandler={onLogin} />
      <PLabel fontSize="20px" fontWeight="lighter">
        Belum punya akun?
        <CustomLink to="/register"> Silahkan daftar disini</CustomLink>
      </PLabel>
    </PageContainer>
  );
}

export default LoginPage;
