import ArrowLeft from "../assets/icons/arrow-left.svg?react";
import ArrowRight from "../assets/icons/arrow-right.svg?react";

function Pagenation() {
  const totalUsers = 32;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(totalUsers / itemsPerPage);
  const currentPage = 1;

  return (
    <ul className="text-body1 weight-regular text-grayscale-40 flex items-center justify-center pt-40">
      <ArrowLeft className="cursor-pointer" />
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
      <ArrowRight className="cursor-pointer" />
    </ul>
  );
}

export default Pagenation;
