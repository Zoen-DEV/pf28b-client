import React, { useEffect, useMemo, useState } from "react";
import MangaCard from "./MangaCard";
import Pagination from "./Pagination";

const MangaList = ({ mangas }) => {
  let PageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredMangas, setFilteresMangas] = useState(mangas)
  
  useEffect(() => {
    setFilteresMangas(mangas);
  }, [mangas]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredMangas.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, filteredMangas]);


  return (
    <div className="manga_list">
      {currentTableData?.map((m, index) => {
        return(
          <MangaCard
          key={index}
          title={m.title}
          image={m.image}
          score={m.score}
          popularity={m.popularity}
          synopsis={m.synopsis}
          genres={m.genres}
          id={m.id}
          price={m.price}
          chapters={m.chapters}
        />
        )
      })}
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
