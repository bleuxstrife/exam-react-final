import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function LoginInput({ loginHandler }) {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePassChange] = useInput('');

  function onLogin(event) {
    event.preventDefault();
    loginHandler({ email, password });
  }

  return (
    <form onSubmit={onLogin} className="input-login">
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
      <input type="password" placeholder="Password" value={password} onChange={handlePassChange} required />
      <button type="submit">Masuk</button>
    </form>
  );
}

LoginInput.propTypes = {
  loginHandler: PropTypes.func.isRequired,
};

export default LoginInput;
