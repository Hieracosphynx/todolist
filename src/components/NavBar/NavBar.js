import React, { useContext } from 'react';
import AuthContext from '../../context/auth-context';
import classes from './NavBar.module.css';

const NavBar = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.navbar}>
      {ctx.isLoggedIn && <button onClick={props.logOut}>Logout</button>}
    </nav>
  );
};

export default NavBar;
