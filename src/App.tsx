import React from "react";
import {
  Redirect,
  useRouteMatch,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { useSelector } from "react-redux";

import { Store } from "./redux";
import Dashboard from "./pages/dashboard";
import FeedbackListPage from "./pages/feedback";
import GuardRoute from "./routes/GuardRoute";
import LoginPage from "./pages/login";
import NavBar from "./components/NavBar";


function App() {
  const userIsLogged = useSelector(
    (state: Store) => state.authReducer.isSignedIn
  );


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
