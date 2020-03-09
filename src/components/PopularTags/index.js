import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

const PopularTags = () => {
  const [{ isLoading, response, error }, doFetchData] = useFetch("/tags");
  useEffect(() => {
    doFetchData();
  }, [doFetchData]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        {response &&
          response.tags.map((tag, index) => (
            <Link
              to={`/tags/${tag}`}
              className="tag-default tag-pill"
              key={index}
            >
              {tag}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PopularTags;
