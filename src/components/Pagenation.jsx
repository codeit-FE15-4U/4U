import ArrowLeft from "../assets/icons/arrow-left.svg?react";
import ArrowStart from "../assets/icons/arrow-left-end.svg?react";
import ArrowRight from "../assets/icons/arrow-right.svg?react";
import ArrowEnd from "../assets/icons/arrow-right-end.svg?react";

function Pagenation({ totalPages, currentPage, onPageChange }) {
  const movePage = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const range = 5;
  const currentBlock = Math.ceil(currentPage / range);
  let startPage = (currentBlock - 1) * range + 1;
  let endPage = Math.min(startPage + range - 1, totalPages);

  return (
    <ul className="text-body1 weight-regular text-grayscale-40 tablet:pt-50 flex items-center justify-center pt-40">
      <ArrowStart className="cursor-pointer" onClick={() => movePage(1)} />
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
      <ArrowEnd
        className="cursor-pointer"
        onClick={() => movePage(totalPages)}
      />
    </ul>
  );
}

export default Pagenation;
