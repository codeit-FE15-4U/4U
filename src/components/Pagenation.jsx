import ArrowLeft from "../assets/icons/arrow-left.svg?react";
import ArrowRight from "../assets/icons/arrow-right.svg?react";

function Pagenation({ totalPages, currentPage, onPageChange }) {
  const movePage = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const range = 5;
  let startPage = Math.max(currentPage - Math.floor(range / 2), 1);
  let endPage = Math.min(startPage + range - 1, totalPages);
  if (endPage - startPage + 1 < range) {
    startPage = Math.max(endPage - range + 1, 1);
  }

  return (
    <ul className="text-body1 weight-regular text-grayscale-40 flex items-center justify-center pt-40">
      <ArrowLeft
        className="cursor-pointer"
        onClick={() => movePage(currentPage - 1)}
      />
      {[...Array(endPage - startPage + 1)].map((value, index) => {
        const page = startPage + index;
        return (
          <li
            className={`${page === currentPage ? "text-brown-40" : ""} hover:text-grayscale-60 flex size-40 cursor-pointer items-center justify-center`}
            key={index}
            onClick={() => movePage(page)}
          >
            {page}
          </li>
        );
      })}
      <ArrowRight
        className="cursor-pointer"
        onClick={() => movePage(currentPage + 1)}
      />
    </ul>
  );
}

export default Pagenation;
