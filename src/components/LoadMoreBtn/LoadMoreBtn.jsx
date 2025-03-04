import React from "react";

const LoadMoreBtn = ({ page, setPage }) => {
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default LoadMoreBtn;
