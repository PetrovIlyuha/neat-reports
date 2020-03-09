import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

import Feed from "../../components/Feed";
import Pagination from "../../components/Pagination/Pagination";

import Banner from "../../img/banner.png";

const GlobalFeed = props => {
  console.log(props);
  const apiUrl = "/articles?limit=10&offset=0";
  const [{ isLoading, response, error }, doFetchData] = useFetch(apiUrl);

  useEffect(() => {
    doFetchData();
  }, [doFetchData]);

  return (
    <div className="home-page">
      <div className="banner" style={bannerStyled}></div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {isLoading && <div>Loading...</div>}
            {error && (
              <div>We're experiencing some trouble getting data...</div>
            )}
            {!isLoading && response && (
              <>
                <Feed articles={response.articles} />
                <Pagination total={500} limit={20} url="/" currentPage={2} />
              </>
            )}
          </div>
          <div className="col-md-3">Popular Tags</div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;

const bannerStyled = {
  backgroundImage: "url(" + Banner + ")",
  height: "300px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};
