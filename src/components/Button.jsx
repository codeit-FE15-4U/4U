import { Link } from "react-router";

import arrowRight from "../assets/icons/arrow-right.svg";
function Button({ content, path }) {
  // content: 버튼 안에 입력할 문구
  // path: 클릭 시 이동할 경로
  return (
    // <Link to={path}>
    <button className="bg-brown-10 border-brown-40 text-brown-40 tablet:px-24 tablet:py-12 active:bg-brown-20 flex items-center justify-center gap-4 rounded-lg border px-12 py-8 hover:border-2">
      {content}
      <img src={arrowRight} />
    </button>
    // </Link>
  );
}

export default Button;
