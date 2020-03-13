import React, { useEffect, useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import TagList from "../../components/TagList";

import useFetch from "../../hooks/useFetch";
import { CurrentUserContext } from "../../contexts/currentUser";

import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

const SingleArticle = props => {
  const slug = props.match.params.slug;
  const apiUrl = `/articles/${slug}`;
  const [
    {
      isLoading: fetchArticleIsLoading,
      response: fetchArticleResponse,
      error: fetchArticleError
    },
    doFetchData
  ] = useFetch(apiUrl);
  const [{ response: deleteArticleResponse }, doDeleteArticle] = useFetch(
    apiUrl
  );
  const [isSuccessfulDelete, setIsSuccessfulDelete] = useState(false);
  const [currentUserState] = useContext(CurrentUserContext);

  const isAuthor = () => {
    if (!fetchArticleResponse || !currentUserState.isLoggedIn) {
      return false;
    }
    return (
      fetchArticleResponse.article.author.username ===
      currentUserState.currentUser.username
    );
  };
  useEffect(() => {
    if (!deleteArticleResponse) {
      return;
    }
    setIsSuccessfulDelete(true);
  }, [deleteArticleResponse]);
  useEffect(() => {
    doFetchData();
  }, [doFetchData]);

  if (isSuccessfulDelete) {
    return <Redirect to="/" />;
  }

  const deleteArticle = () => {
    doDeleteArticle({
      method: "delete"
    });
  };

  return (
    <div className="article-page">
      <div className="banner">
        {!fetchArticleIsLoading && fetchArticleResponse && (
          <div className="container">
            <h1>{fetchArticleResponse.article.title}</h1>
            <div className="article-meta">
              <Link
                to={`/profiles/${fetchArticleResponse.article.author.username}`}
              >
                <img src={fetchArticleResponse.article.author.image} alt="" />
              </Link>
              <div className="info">
                <Link
                  to={`/profiles/${fetchArticleResponse.article.author.username}`}
                >
                  {fetchArticleResponse.article.author.username}{" "}
                </Link>
                <span className="date">
                  {fetchArticleResponse.article.createdAt}
                </span>
              </div>
              {isAuthor() && (
                <span>
                  <Link
                    className="btn btn-outline-secondary btn-sm"
                    to={`/articles/${fetchArticleResponse.article.slug}/edit`}
                  >
                    <AiTwotoneEdit />
                    Edit Article
                  </Link>
                  <button
                    onClick={deleteArticle}
                    className="btn btn-outline-danger btn-sm"
                    style={{ marginLeft: "10px" }}
                  >
                    <FaTrashAlt />
                    Remove Post from Feed
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="container page">
        {fetchArticleIsLoading && <Loading />}
        {fetchArticleError && <ErrorMessage />}
        {!fetchArticleIsLoading && fetchArticleResponse && (
          <div className="row article-content">
            <div className="col-xs-12">
              <div>
                <p>{fetchArticleResponse.article.body}</p>
              </div>
              <TagList tags={fetchArticleResponse.article.tagList} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleArticle;
