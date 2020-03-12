import React, { useContext } from "react";

import useFetch from "../../hooks/useFetch";
import { CurrentUserContext } from "../../contexts/currentUser";
import BackendErrorMessages from "../../components/BackendErrors/BackendErrorMessage";
const Settings = () => {
  const [currentUserState] = useContext(CurrentUserContext);
  const apiUrl = "/user";
  const [{ response, error }, doFetchUser] = useFetch(apiUrl);

  const handleSubmit = () => {};
  const logOut = params => {};
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Profile Settings</h1>
            {error && <BackendErrorMessages backendErrors={error.errors} />}
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="You profile picture"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows="8"
                    placeholder="Your short biography"
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="E-mail"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                  />
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary pull-xs-right"
                >
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button className="btn btn-ouline-danger" onClick={logOut}>
              Or click here to log out..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
