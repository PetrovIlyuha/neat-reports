import React from "react";
import classNames from "classnames";
import useFetch from "../hooks/useFetch";
import { FaHeart } from "react-icons/fa";

const AddToFavorites = ({ isFavorited, favoritesCount, slug }) => {
  const apiUrl = `/articles/${slug}/favorite`;
  const [{ response }, doFetch] = useFetch(apiUrl);

  const favoritesCountWithResponse = response
    ? response.article.favoritesCount
    : favoritesCount;

  const isFavoritedWithResponse = response
    ? response.article.isFavorited
    : isFavorited;

  const buttonClasses = classNames({
    btn: true,
    "btn-sm": true,
    "btn-primary": isFavoritedWithResponse,
    "btn-outline-primary": !isFavoritedWithResponse
  });

  const handleLike = e => {
    e.preventDefault();
    doFetch({
      method: isFavoritedWithResponse ? "delete" : "post"
    });
  };

  return (
    <button className={buttonClasses} onClick={handleLike}>
      <FaHeart />
      <span>&nbsp; {favoritesCountWithResponse}</span>
    </button>
  );
};

export default AddToFavorites;
