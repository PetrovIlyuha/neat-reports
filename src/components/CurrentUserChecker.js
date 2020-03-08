import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const CurrentUserChecker = ({ children }) => {
  const [{ response }, doFetchData] = useFetch("/user");

  useEffect(() => {
    doFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return children;
};

export default CurrentUserChecker;
