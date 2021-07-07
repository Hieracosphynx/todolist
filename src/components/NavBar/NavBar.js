import React, { useContext } from 'react';
import AuthContext from '../../context/auth-context';
import classes from './NavBar.module.css';

const NavBar = () => {
  const authCtx = useContext(AuthContext);

  return (
    <nav className={classes.navbar}>
      {authCtx.isLoggedIn && <button onClick={authCtx.onLogOut}>Logout</button>}
    </nav>
  );
};

export default NavBar;
