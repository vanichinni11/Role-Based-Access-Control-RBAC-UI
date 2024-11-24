import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UserList from "./components/UserList";
import RoleList from "./components/RoleList";
import Permissions from "./components/Permissions";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/roles">Roles</Link></li>
            <li><Link to="/permissions">Permissions</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users" component={UserList} />
          <Route path="/roles" component={RoleList} />
          <Route path="/permissions" component={Permissions} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
