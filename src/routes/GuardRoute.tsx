import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

const GuardRoute: FC<React.ComponentProps<typeof Route>> = (props) => {
  const userIsLogged = false;

  return (
    <Route {...props}>
      {userIsLogged ? props.children : <Redirect to="/login" />}
    </Route>
  );
};

export default GuardRoute;
