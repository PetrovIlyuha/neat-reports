import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

import Feed from "../../components/Feed";

import Banner from "../../img/banner.png";

const GlobalFeed = () => {
  const apiUrl = "/articles?limit=10&offset=0";
  const [{ isLoading, response, error }, doFetchData] = useFetch(apiUrl);

  useEffect(() => {
    doFetchData();
  }, [doFetchData]);

  return (
    <div className="home-page">
      <div
        className="banner"
        style={{
          backgroundImage: "url(" + Banner + ")",
          height: "300px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {isLoading && <div>Loading...</div>}
            {error && (
              <div>We're experiencing some trouble getting data...</div>
            )}
            {!isLoading && response && <Feed articles={response.articles} />}
          </div>
          <div className="col-md-3">Popular Tags</div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;
