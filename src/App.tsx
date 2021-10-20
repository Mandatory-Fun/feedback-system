import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/login";
import NavBar from "./components/NavBar";
import FeedbackListPage from "./pages/feedback";
import { Store } from "./redux";
import GuardRoute from "./routes/GuardRoute";

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
        />
        <GuardRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
