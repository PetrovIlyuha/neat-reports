import React, { useEffect } from "react";
import { paginator, limit } from "../../../../utils/index";
import { stringify } from "query-string";
import Loading from "../../../../components/Loading";
import Feed from "../../../../components/Feed";
import Pagination from "../../../../components/Pagination/Pagination";
import ErrorMessage from "../../../../components/ErrorMessage";
import useFetch from "../../../../hooks/useFetch";

const getApiUrl = ({ username, offset, isFavorites }) => {
  const params = isFavorites
    ? { limit, offset, favorited: username }
    : { limit, offset, author: username };
  return `/articles?${stringify(params)}`;
};

const UserArticles = ({ username, location, isFavorites, url }) => {
  const { offset, currentPage } = paginator(location.search);
  const apiUrl = getApiUrl({ username, offset, isFavorites });
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch, isFavorites]);
  return (
    <div>
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
  );
};

export default UserArticles;
