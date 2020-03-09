import React, { useEffect } from "react";
import { stringify } from "query-string";
import useFetch from "../../hooks/useFetch";

import Feed from "../../components/Feed";
import Pagination from "../../components/Pagination/Pagination";
import PopularTags from "../../components/PopularTags";
import FeedToggler from "../../components/FeedToggler/index";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { paginator, limit } from "../../utils";

import Banner from "../../img/banner.png";

const YourFeed = ({ location, match }) => {
  const { offset, currentPage } = paginator(location.search);
  const stringifiedParams = stringify({
    limit,
    offset
  });
  const apiUrl = `/articles/feed?${stringifiedParams}`;
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
            <FeedToggler tagName="bar" />
            {isLoading && <Loading />}
            {error && <ErrorMessage />}
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
          <div className="col-md-3">
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourFeed;

const bannerStyled = {
  backgroundImage: "url(" + Banner + ")",
  height: "300px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};
