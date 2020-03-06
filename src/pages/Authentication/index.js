import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Authentication = props => {
  const isLogin = props.match.path === "/login";
  const pageTitle = isLogin ? "Log In" : "Sign Up";
  const descriptionLink = isLogin ? "/register" : "/login";
  const descriptionText = isLogin
    ? "First Time Here? Create an Account"
    : "Already a User? Use your Credentials to Log In";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ isLoading, response, error }, doFetchData] = useFetch(
    "/users/login"
  );
  console.log(isLogin);
  const handleSubmit = e => {
    e.preventDefault();
    doFetchData({
      method: "post",
      data: {
        user: {
          email: "softclubplus@gmail.com",
          password: "topcodingsoftschools"
        }
      }
    });
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{pageTitle}</h1>
            <p className="text-xs-center">
              <Link to={descriptionLink}>{descriptionText}</Link>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={isLoading}
                >
                  Sign In
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
