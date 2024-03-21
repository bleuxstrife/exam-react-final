import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import { Form, Input } from '../../styled/input';
import { Button } from '../../styled/button';

function RegisterInput({ registerHandler }) {
  const [name, handleNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [password, handlePassChange] = useInput('');

  function onRegister(event) {
    event.preventDefault();
    registerHandler({ name, email, password });
  }

  return (
    <Form>
      <Input type="text" placeholder="Nama" value={name} onChange={handleNameChange} />
      <Input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <Input type="password" placeholder="Password" value={password} onChange={handlePassChange} />
      <Button type="button" onClick={(e) => onRegister(e)}>Daftar</Button>
    </Form>
  );
}

RegisterInput.propTypes = {
  registerHandler: PropTypes.func.isRequired,
};

export default RegisterInput;
