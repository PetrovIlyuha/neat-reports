import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ArticleForm from "../../components/ArticleForm";
import useFetch from "../../hooks/useFetch";

const CreateArticle = () => {
  const apiUrl = "/articles";
  const [{ isLoading, response, error }, doFetchData] = useFetch(apiUrl);
  const initialValues = {
    title: "",
    description: "",
    body: "",
    tagList: []
  };
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);
  const handleSubmit = article => {
    doFetchData({
      method: "post",
      data: {
        article
      }
    });
  };
  useEffect(() => {
    if (!response) {
      return;
    }
    setIsSuccessfulSubmit(true);
  }, [response]);

  if (isSuccessfulSubmit) {
    return <Redirect to={`/articles/${response.article.slug}`} />;
  }
  return (
    <div>
      <ArticleForm
        errors={(error && error.errors) || {}}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateArticle;
