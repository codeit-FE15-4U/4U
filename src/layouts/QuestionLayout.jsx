import LogoImg from "../assets/images/logo-img.svg";
import ProfileImg from "../assets/images/profile-img.svg";
import EmptyBox from "../assets/images/empty-box.svg";

const QuestionLayout = () => {
  return (
    <div className="bg-grayscale-20 flex min-h-screen flex-col items-center gap-3 bg-[url(/src/assets/images/openmind-bg.png)] bg-size-[1200px_177px] bg-top bg-no-repeat px-6 pb-31.5">
      <img className="mt-10 h-12.25 w-31" src={LogoImg} alt="로고 이미지" />
      <img src={ProfileImg} alt="프로필 이미지" />
      <p className="text-h3 font-regular">아초는고양이</p>
      <ul className="flex gap-3">
        <li className="bg-brown-40 h-10 w-10 rounded-full"></li>
        <li className="h-10 w-10 rounded-full bg-yellow-50"></li>
        <li className="h-10 w-10 rounded-full bg-blue-50"></li>
      </ul>
      <div className="border-brown-20 bg-brown-10 mt-13.5 flex min-h-82.5 w-full max-w-179 flex-col items-center rounded-2xl border px-6 py-4">
        <div>
          <p className="text-body2 text-brown-40 font-regular">
            아직 질문이 없습니다
          </p>
        </div>
        <img className="mt-16.5 w-28.5" src={EmptyBox} alt="빈 박스 이미지" />
      </div>
    </div>
  );
};
export default QuestionLayout;
