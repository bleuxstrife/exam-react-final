import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function RegisterInput({ registerHandler }) {
  const [name, handleNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [password, handlePassChange] = useInput('');

  function onRegister(event) {
    event.preventDefault();
    registerHandler({ name, email, password });
  }

  return (
    <form onSubmit={onRegister} className="input-register">
      <input type="text" placeholder="Nama" value={name} onChange={handleNameChange} required />
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
      <input type="password" placeholder="Password" value={password} onChange={handlePassChange} required />
      <button type="submit">Daftar</button>
    </form>
  );
}

RegisterInput.propTypes = {
  registerHandler: PropTypes.func.isRequired,
};

export default RegisterInput;
