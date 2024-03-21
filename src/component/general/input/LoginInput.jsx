import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import { Form, Input } from '../../styled/input';
import { Button } from '../../styled/button';

function LoginInput({ loginHandler }) {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePassChange] = useInput('');

  function onLogin(event) {
    event.preventDefault();
    loginHandler({ email, password });
  }

  return (
    <Form>
      <Input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <Input type="password" placeholder="Password" value={password} onChange={handlePassChange} />
      <Button type="button" onClick={(e) => onLogin(e)}>Masuk</Button>
    </Form>
  );
}

LoginInput.propTypes = {
  loginHandler: PropTypes.func.isRequired,
};

export default LoginInput;
