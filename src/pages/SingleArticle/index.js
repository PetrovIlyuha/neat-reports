import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

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
  const [{ isLoading, response, error }, doFetchData] = useFetch(apiUrl);
  const [currentUserState] = useContext(CurrentUserContext);

  const isAuthor = () => {
    if (!response || !currentUserState.isLoggedIn) {
      return false;
    }
    return (
      response.article.author.username === currentUserState.currentUser.username
    );
  };

  useEffect(() => {
    doFetchData();
  }, [doFetchData]);
  const deleteArticle = () => {
    console.log("delete article");
  };
  return (
    <div className="article-page">
      <div className="banner">
        {!isLoading && response && (
          <div className="container">
            <h1>{response.article.title}</h1>
            <div className="article-meta">
              <Link to={`/profiles/${response.article.author.username}`}>
                <img src={response.article.author.image} alt="" />
              </Link>
              <div className="info">
                <Link to={`/profiles/${response.article.author.username}`}>
                  {response.article.author.username}{" "}
                </Link>
                <span className="date">{response.article.createdAt}</span>
              </div>
              {isAuthor() && (
                <span>
                  <Link
                    className="btn btn-outline-secondary btn-sm"
                    to={`/articles/${response.article.slug}/edit`}
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
        {isLoading && <Loading />}
        {error && <ErrorMessage />}
        {!isLoading && response && (
          <div className="row article-content">
            <div className="col-xs-12">
              <div>
                <p>{response.article.body}</p>
              </div>
              <TagList tags={response.article.tagList} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleArticle;
