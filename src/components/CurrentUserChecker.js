import { useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { CurrentUserContext } from "../contexts/currentUser";
import useLocalStorage from "../hooks/useLocalStorage";
const CurrentUserChecker = ({ children }) => {
  const [{ response }, doFetchData] = useFetch("/user");
  const [, dispatch] = useContext(CurrentUserContext);
  const [token] = useLocalStorage("token");

  useEffect(() => {
    if (!token) {
      dispatch({ type: "SET_UNAUTHORIZED" });
      return;
    }
    doFetchData();
    dispatch({ type: "LOADING" });
  }, [dispatch, doFetchData, token]);

  useEffect(() => {
    if (!response) {
      return;
    }
    dispatch({ type: "AUTHORIZED", payload: response.user });
  }, [dispatch, response]);
  return children;
};

export default CurrentUserChecker;

