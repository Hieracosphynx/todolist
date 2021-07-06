import React, { useState, useEffect } from 'react';

const LogIn = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  useEffect(() => {
    const identifier = setTimeout(
      setIsFormValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 7
      ),
      500
    );

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const logInHandler = (e) => {
    e.preventDefault();
    props.onLogIn();
  };

  return (
    <div>
      <form onSubmit={logInHandler}>
        <div>
          <label>Email</label>
          <input id='email' type='email' onChange={emailHandler} />
        </div>
        <div>
          <label>Password</label>
          <input id='password' type='password' onChange={passwordHandler} />
        </div>
        <button type='submit' disabled={!isFormValid}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LogIn;
