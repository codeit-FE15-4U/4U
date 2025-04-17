import LogoImg from "../assets/images/logo-img.svg";
import ProfileImg from "../assets/images/profile-img.svg";
import EmptyBox from "../assets/images/empty-box.svg";

const QuestionLayout = () => {
  return (
    <div className="bg-grayscale-20 flex min-h-screen flex-col items-center gap-12 bg-[url(/src/assets/images/openmind-bg.png)] bg-size-[1200px_177px] bg-top bg-no-repeat px-24 pb-126">
      <img className="mt-40 h-49 w-124" src={LogoImg} alt="로고 이미지" />
      <img src={ProfileImg} alt="프로필 이미지" />
      <p className="text-h3 font-regular">아초는고양이</p>
      <ul className="flex gap-12">
        <li className="bg-brown-40 h-40 w-40 rounded-full"></li>
        <li className="h-40 w-40 rounded-full bg-yellow-50"></li>
        <li className="h-40 w-40 rounded-full bg-blue-50"></li>
      </ul>
      <div className="border-brown-20 bg-brown-10 mt-54 flex min-h-330 w-full max-w-327 flex-col items-center rounded-2xl border px-24 py-16">
        <div>
          <p className="text-body2 text-brown-40 font-regular">
            아직 질문이 없습니다
          </p>
        </div>
        <img className="mt-66 w-114" src={EmptyBox} alt="빈 박스 이미지" />
      </div>
    </div>
  );
};
export default QuestionLayout;
