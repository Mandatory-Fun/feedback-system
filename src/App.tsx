import {
  Redirect,
<<<<<<< HEAD
  useRouteMatch
=======
  Route,
  BrowserRouter as Router,
  Switch
>>>>>>> upstream/develop
} from "react-router-dom";

import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/login";
import NavBar from "./components/NavBar";
import FeedbackListPage from "./pages/feedback";
import GuardRoute from "./routes/GuardRoute";
import LoginPage from "./pages/login";
import NavBar from "./components/NavBar";
import React from "react";
import { Store } from "./redux";
import { useSelector } from "react-redux";


function App() {
  const userIsLogged = useSelector(
    (state: Store) => state.authReducer.isSignedIn
  );

  let { path } = useRouteMatch();
  console.log('path', path);


  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>

        <Route path="/login">
          {!userIsLogged ? <LoginPage /> : <Redirect to="/dashboard" />}
        </Route>

        <Route
          path="/dashboard/allProjects/:nameOfProject"
          component={FeedbackListPage}
        >
        </Route>


        <GuardRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
