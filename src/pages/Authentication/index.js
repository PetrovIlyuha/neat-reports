import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ isLoading, response, error }, doFetchData] = useFetch(
    "/users/login"
  );

  console.log("useFetch", response, isLoading, error);

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
            <h1 className="text-xs-center">Login</h1>
            <p className="text-xs-center">
              <Link to="/register">First Time Here? Create an Account</Link>
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
