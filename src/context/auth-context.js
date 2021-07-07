import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogIn: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogInHandler = () => {
    localStorage.setItem('LOGGED_IN', '1');
    setIsLoggedIn(true);
  };

  const onLogOutHandler = () => {
    localStorage.removeItem('LOGGED_IN');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem('LOGGED_IN') === 1) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogIn: onLogInHandler,
        onLogOut: onLogOutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
