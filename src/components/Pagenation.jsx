import ArrowLeft from "../assets/icons/arrow-left.svg?react";
import ArrowRight from "../assets/icons/arrow-right.svg?react";

function Pagenation({ totalPages, currentPage, onPageChange }) {
  const movePage = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <ul className="text-body1 weight-regular text-grayscale-40 flex items-center justify-center pt-40">
      <ArrowLeft
        className="cursor-pointer"
        onClick={() => movePage(currentPage - 1)}
      />
      {[...Array(totalPages)].map((value, index) => {
        const page = index + 1;
        return (
          <li
            className={`${page === currentPage && "text-brown-40"} flex size-40 items-center justify-center`}
            key={index}
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
