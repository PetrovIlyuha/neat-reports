import React, { useState, useEffect, useContext } from "react";
// import { Redirect } from "react-router-dom";
import ArticleForm from "../../components/ArticleForm";
import useFetch from "../../hooks/useFetch";
// import { CurrentUserContext } from "../../contexts/currentUser";

const EditArticle = ({ match }) => {
  const slug = match.params.slug;
  const apiUrl = `/articles/${slug}`;
  const [{ response: fetchArticleResponse }, doFetchArticle] = useFetch(apiUrl);
  const [
    { response: updateArticleResponse, error: updateArticleError },
    doUpdateArticle
  ] = useFetch(apiUrl);
  const [initialValues, setInitialValues] = useState(null);
  useEffect(() => {
    doFetchArticle();
  }, [doFetchArticle]);
  useEffect(() => {
    if (!fetchArticleResponse) {
      return;
    }
    setInitialValues({
      title: fetchArticleResponse.article.title,
      description: fetchArticleResponse.article.description,
      body: fetchArticleResponse.article.body,
      tagList: fetchArticleResponse.article.tagList
    });
  }, [fetchArticleResponse]);
  const handleSubmit = article => {
    console.log("edit submission", article);
    doUpdateArticle({
      method: "put",
      data: {
        article
      }
    });
  };
  return (
    <ArticleForm
      onSubmit={handleSubmit}
      errors={(updateArticleError && updateArticleError.errors) || {}}
      initialValues={initialValues}
    />
  );
};

export default EditArticle;
