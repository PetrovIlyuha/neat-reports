import React, { useEffect } from "react";
import { stringify } from "query-string";
import useFetch from "../../hooks/useFetch";

import Feed from "../../components/Feed";
import Pagination from "../../components/Pagination/Pagination";
import { paginator, limit } from "../../utils";

import Banner from "../../img/banner.png";

const GlobalFeed = ({ location, match }) => {
  const { offset, currentPage } = paginator(location.search);
  const stringifiedParams = stringify({
    limit,
    offset
  });
  const apiUrl = `/articles?${stringifiedParams}`;
  const [{ isLoading, response, error }, doFetchData] = useFetch(apiUrl);
  const url = match.url;
  useEffect(() => {
    doFetchData();
  }, [doFetchData, currentPage]);

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
                <Pagination
                  total={response.articlesCount}
                  limit={limit}
                  url={url}
                  currentPage={currentPage}
                />
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
