import React, { useEffect, useMemo, useState } from "react";
import AnimeCard from "./AnimeCard";
import Pagination from "./Pagination";

const AnimeList = ({ animes }) => {
  let PageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredAnimes, setFilteredAnimes] = useState(animes)

  useEffect(() => {
    setFilteredAnimes(animes);
  }, [animes]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredAnimes.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, filteredAnimes]);

  return (
    <div className="manga_list">
      {currentTableData?.map((a) => (
        <AnimeCard
          key={Math.random()}
          title={a.title}
          image={a.image}
          release={a.release}
          rating={a.rating}
          description={a.description}
          genres={a.genres}
        />
      ))}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={animes.length}
        pageSize={10}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default AnimeList;
