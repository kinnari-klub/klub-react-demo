import React, { useState, useEffect, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const Login = (props) => {

  const authCtx = useContext(AuthContext);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=> {
    const identifier = setTimeout(() => {
      console.log("checking from validity");
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 700);

    return () => {
      console.log('Clean Up');
      clearTimeout(identifier); // built in JS function
    };
  }, [enteredEmail,enteredPassword ]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid) {
      console.log("enter login", event);
      authCtx.onLogin(enteredEmail, enteredPassword);
      console.log("after ctx", enteredEmail, enteredPassword);
    } else if(!emailIsValid) {
      console.log("Invalid", emailRef);
      emailRef.current?.focus();
    } else {
      passwordRef.current?.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id="email" label='Email' type='email'
        ref={emailRef}
        isValid={emailIsValid} 
        value={enteredEmail}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
        >
        </Input>
        <Input id="password" label='Password' type='password'
        ref={passwordRef} 
        isValid={passwordIsValid}
        value={enteredPassword}
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
        >
        </Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
