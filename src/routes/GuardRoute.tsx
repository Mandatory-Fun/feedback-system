import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Store } from '../redux';

const GuardRoute: FC<React.ComponentProps<typeof Route>> = (props) => {
  const userIsLogged = useSelector(
    (state: Store) => state.authReducer.isSignedIn
  );

  return (
    <Route {...props}>
      {userIsLogged ? props.children : <Redirect to="/login" />}
    </Route>
  );
};

export default GuardRoute;
