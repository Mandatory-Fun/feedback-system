import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import styles from './styles.module.css';

const LoginPage = () => {
  return (
    <div className={styles.page}>
      <Card className={styles.mainCard}>
        <Typography variant="h4" component="h2" className={styles.title}>
          Log in
        </Typography>
        <form className={styles.form}>
          <TextField
            className={styles.email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            className={styles.password}
            id="outlined-basic"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
