import React, { useMemo, useState } from "react";
import MangaCard from "./MangaCard";
import Pagination from "./Pagination";

const MangaList = ({ mangas }) => {
  let PageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return mangas.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);


  return (
    <div className="manga_list">
      {currentTableData.map((m) => (
        <MangaCard
          key={m.id}
          title={m.title}
          image={m.image}
          score={m.score}
          popularity={m.popularity}
          synopsis={m.synopsis}
          genres={m.genres}
          id={m.id}
          price={m.price}
        />
      ))}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={mangas.length}
        pageSize={10}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default MangaList;
