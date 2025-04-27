import { Link } from "react-router";
import Logo from "../assets/images/logo.png";
import Button from "../components/Button";
import Arrow from "../assets/icons/arrow.svg?react";

const NotFoundPage = () => {
  return (
    <>
      <div className="bg-grayscale-20 flex h-screen flex-col items-center justify-center gap-72 bg-[url('./assets/images/main-bg.png')] bg-[length:100%_auto] bg-bottom bg-no-repeat">
        <Link to="/">
          <img src={Logo} alt="Logo" className="tablet:w-456 w-248" />
        </Link>

        <div className="flex flex-col items-center justify-center">
          <p className="tablet:text-h1 text-h2 text-grayscale-60 font-bold">
            페이지를 찾을 수 없어요
          </p>
          <p className="text-grayscale-40 tablet:text-body1 text-body2 mt-4">
            존재하지 않는 경로로 이동하셨습니다.
          </p>
        </div>
        <Link to="/list">
          <Button type="empty" className="tablet:text-16 text-14">
            질문하러 가기
            <Arrow className="text-brown-40 size-20" />
          </Button>
        </Link>
      </div>
    </>
  );
};
export default NotFoundPage;
