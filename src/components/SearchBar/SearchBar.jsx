import React from "react";
import toast, { Toaster } from "react-hot-toast";
import clsx from "clsx";

import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchRequest = e.target.elements.search.value.trim();
    if (searchRequest) {
      onSubmit(searchRequest);
    } else {
      toast.error("Fill the search field.");
      return;
    }
    onSubmit(searchRequest);
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={clsx(css.photo_form)}>
        <input
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search images and photos"
          className={clsx(css.photo_input)}
        />
        <button type="submit" className={clsx(css.photo_button)}>
          Search
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
