import React, { useState, useEffect, useReducer } from 'react';

const emailReducerHandler = (state, action) => {
  if (action.type === 'EMAIL_INPUT') {
    return { emailValue: action.val, emailIsValid: action.val.includes('@') };
  }
  if (action.type === 'EMAIL_BLUR_INPUT') {
    return { emailValue: state.emailValue, emailIsValid: state.emailIsValid };
  }
  return {
    emailValue: '',
    emailIsValid: false,
  };
};

const passwordReducerHandler = (state, action) => {
  if (action.type === 'PASSWORD_INPUT') {
    return {
      passwordValue: action.val,
      passwordIsValid: action.val.trim().length > 7,
    };
  }
  if (action.type === 'PASSWORD_BLUR_INPUT') {
    return {
      passwordValue: state.passwordValue,
      passwordIsValid: state.passwordIsValid,
    };
  }
  return { passwordValue: '', passwordIsValid: false };
};

const LogIn = (props) => {
  const [isFormValid, setIsFormValid] = useState();

  const [emailReducer, dispatchEmailReducer] = useReducer(emailReducerHandler, {
    emailValue: '',
    emailIsValid: null,
  });

  const [passwordReducer, dispatchPasswordReducer] = useReducer(
    passwordReducerHandler,
    {
      passwordValue: '',
      passwordIsValid: null,
    }
  );

  const { emailIsValid: emailValid } = emailReducer;
  const { passwordIsValid: passwordValid } = passwordReducer;

  useEffect(() => {
    const identifier = setTimeout(
      setIsFormValid(emailValid && passwordValid),
      500
    );

    return () => {
      clearTimeout(identifier);
    };
  }, [emailValid, passwordValid]);

  const emailHandler = (e) => {
    dispatchEmailReducer({
      type: 'EMAIL_INPUT',
      val: e.target.value,
    });
  };

  const passwordHandler = (e) => {
    dispatchPasswordReducer({
      type: 'PASSWORD_INPUT',
      val: e.target.value,
    });
  };

  const emailBlurHandler = () => {
    dispatchEmailReducer({ type: 'EMAIL_BLUR_INPUT' });
  };

  const passwordBlurHandler = () => {
    dispatchPasswordReducer({ type: 'PASSWORD_BLUR_INPUT' });
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
          <input
            id='email'
            type='email'
            value={emailReducer.emailValue}
            onChange={emailHandler}
            onBlur={emailBlurHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            id='password'
            type='password'
            value={passwordReducer.passwordValue}
            onChange={passwordHandler}
            onBlur={passwordBlurHandler}
          />
        </div>
        <button type='submit' disabled={!isFormValid}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LogIn;
