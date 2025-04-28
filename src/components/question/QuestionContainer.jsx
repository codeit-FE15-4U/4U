import { Link } from "react-router";
import LogoImg from "../../assets/images/logo.png";
import UrlShareButton from "../shareButton/UrlShareButton";
import FacebookShareButton from "../shareButton/FacebookShareButton";
import KakaoShareButton from "../shareButton/KakaoShareButton";
import SkeletonSubject from "../skeletonUi/SkeletonSubject";

const QuestionContainer = ({ children, subject }) => {
  return (
    <div className="bg-grayscale-20 relative min-h-screen pb-126">
      <div className="tablet:bg-size-[1200px_234px] tablet:h-234 absolute h-177 w-full bg-white bg-[url(/src/assets/images/openmind-bg.png)] bg-size-[906px_177px] bg-center bg-no-repeat" />
      <div className="relative px-24">
        <header className="flex flex-col items-center gap-12">
          <Link to="/list">
            <img
              className="tablet:h-67 tablet:w-170 mt-40 h-49 w-124"
              src={LogoImg}
              alt="로고 이미지"
            />
          </Link>
          {subject.isSubject ? (
            <>
              <div
                className="tablet:size-136 size-104 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${subject.imageSource})` }}
              />
              <p className="tablet:text-h2 text-h3 font-regular">
                {subject.name}
              </p>
            </>
          ) : (
            <SkeletonSubject />
          )}

          <ul className="flex gap-12">
            <li>
              <UrlShareButton />
            </li>
            <li>
              <KakaoShareButton />
            </li>
            <li>
              <FacebookShareButton />
            </li>
          </ul>
        </header>

        <main className="mt-12 flex justify-center">{children}</main>
      </div>
    </div>
  );
};
export default QuestionContainer;
