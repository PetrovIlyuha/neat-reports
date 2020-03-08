import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Feed from "../../components/Feed";

const GlobalFeed = () => {
  const apiUrl = "/articles?limit=10&offset=0";
  const [{ isLoading, response, error }, doFetchData] = useFetch(apiUrl);

  useEffect(() => {
    doFetchData();
  }, [doFetchData]);
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Neat Reports</h1>
          <p>All Cool Minds Have Gathered Here</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;
