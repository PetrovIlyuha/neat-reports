import React, { useContext, useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Redirect } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from "../../contexts/currentUser";
import BackendErrorMessages from "../../components/BackendErrors/BackendErrorMessage";
const Settings = () => {
  const [currentUserState, dispatch] = useContext(CurrentUserContext);
  const apiUrl = "/user";
  const [, setToken] = useLocalStorage();
  const [isSuccessfulLogout, setIsSuccessfulLogout] = useState(false);
  const [{ response, error }, doFetchUser] = useFetch(apiUrl);
  const [image, setImage] = useState("");
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    doFetchUser({
      method: "put",
      data: {
        user: {
          ...currentUserState.currentUser,
          image,
          username,
          bio,
          email,
          password
        }
      }
    });
  };

  const logOut = e => {
    e.preventDefault();
    setToken("");
    dispatch({ type: "LOGOUT" });
    setIsSuccessfulLogout(true);
  };

  useEffect(() => {
    if (!currentUserState.currentUser) {
      return;
    }
    setImage(currentUserState.currentUser.image);
    setUserName(currentUserState.currentUser.username);
    setBio(currentUserState.currentUser.bio);
    setEmail(currentUserState.currentUser.email);
  }, [currentUserState.currentUser]);

  useEffect(() => {
    if (!response) {
      return;
    }

    dispatch({ type: "SET_AUTHORIZED", payload: response.user });
  }, [response, dispatch]);

  if (isSuccessfulLogout) {
    return <Redirect to="/" />;
  }
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
                    value={image}
                    onChange={e => setImage(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows="8"
                    placeholder="Your short biography"
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="E-mail"
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
                  type="submit"
                  className="btn btn-lg btn-primary pull-xs-right"
                >
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button className="btn btn-outline-danger" onClick={logOut}>
              Or click here to log out..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
