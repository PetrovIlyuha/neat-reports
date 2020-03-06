import { useState, useEffect } from "react";
import axios from "axios";

export default url => {
  const baseUrl = "https://conduit.productionready.io/api";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const [options, setOptions] = useState({});

  const doFetchData = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    axios(`${baseUrl}${url}`, options)
      .then(res => {
        console.log("response", res);
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch(err => {
        console.log("error", err);
        setIsLoading(false);
        setError(error?.response?.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return [{ isLoading, response, error }, doFetchData];
};
