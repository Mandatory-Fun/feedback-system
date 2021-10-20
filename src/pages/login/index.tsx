import React, { useRef } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { setAuth } from '../../redux/actions/Auth';

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const handleLogin = () => {
    // console.log((emailRef.current as any).value);
    // console.log((passwordRef.current as any).value);
    dispatch(setAuth(true, (emailRef.current as any).value));
  };

  return (
    <div className={styles.page}>
      <Card className={styles.mainCard}>
        <Typography variant="h4" component="h2" className={styles.title}>
          Log in
        </Typography>
        <FormControl className={styles.form}>
          <div className={styles.email}>
            <TextField
              id="outlined-basic"
              label="Email"
              inputRef={emailRef}
              required
            />
          </div>
          <div className={styles.password}>
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              autoComplete="current-password"
              inputRef={passwordRef}
              required
            />
          </div>
          <button className={styles.button} type="submit" onClick={handleLogin}>
            Log in
          </button>
        </FormControl>
      </Card>
    </div>
  );
};

export default LoginPage;
