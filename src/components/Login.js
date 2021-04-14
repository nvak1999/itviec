import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

const Login = ({ user, setUser, show }) => {
  let history = useHistory();
  // let space = "  ";
  // const handleClick = () => {
  //   history.push("/");
  // };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const inputUser = (e) => {
    setUserName(e.target.value);
  };

  const inputPwd = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && password) {
      setUser(true);
    }
  };

  useEffect(() => {
    if (user === true) {
      history.push("/");
    }
  }, [user]);

  return (
    <div className="login">
      <div className={show ? "show" : "alert alert-danger pos "}>
        you didnt give us email or password
      </div>
      <div className="middle container">
        <form className="white-container" onSubmit={handleSubmit}>
          <div className="login-title-box">
            <h1 className="login-title">login</h1>
          </div>
          <div className="form-group">
            <label className="form-label">Email address</label>
            <input
              placeholder="Enter email"
              type="email"
              id="formBasicEmail"
              className="form-control"
              onChange={inputUser}
            ></input>
            <small className="text-muted form-text">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              placeholder="Password"
              type="password"
              id="formBasicPassword"
              className="form-control"
              onChange={inputPwd}
            ></input>
          </div>
          <div className="form-group">
            <label title="" className="form-check-label">
              <input type="checkbox"></input>Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
