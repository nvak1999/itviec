import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Test from "./components/Test";
import JobDetail from "./components/JobDetail";
import Navbarr from "./components/Navbarr";
function App() {
  const [show, setShow] = useState(true);
  const [user, setUser] = useState(false);

  const ProtectedRoute = (props) => {
    if (user === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Test} />
        <Route
          path="/login"
          exact
          component={() => <Login setUser={setUser} show={show} user={user} />}
        />
        <ProtectedRoute path="/jobs/:id" exact component={JobDetail} />
      </Switch>
    </div>
  );
}

export default App;
