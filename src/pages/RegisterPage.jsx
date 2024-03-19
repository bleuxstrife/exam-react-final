import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from '../states/auth/action';
import RegisterInput from '../component/general/input/RegisterInput';
import { PageContainer } from '../component/styled/container';
import { CustomLink, H2Label, PLabel } from '../component/styled/label';

function RegisterPage() {
  const loginPath = '/login';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const callback = () => {
    navigate(loginPath);
  };
  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({
      email, name, password, callback,
    }));
  };

  return (
    <PageContainer>
      <H2Label>Isi form untuk mendaftar akun</H2Label>
      <RegisterInput registerHandler={onRegister} />
      <PLabel fontSize="20px" fontWeight="lighter">
        Sudah punya akun?
        <CustomLink to={loginPath}> Masuk disini</CustomLink>
      </PLabel>
    </PageContainer>
  );
}

export default RegisterPage;
