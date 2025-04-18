import LogoImg from "../assets/images/logo.png";
import EmptyBox from "../assets/images/empty-box.svg";
import { Link, Outlet, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getQuestionList, getSubject } from "./../api/subjects";

const QuestionLayout = () => {
  const [questionList, setQuestionList] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const [name, setName] = useState(location.state?.name);
  const [imageSource, setImageSource] = useState(location.state?.name);
  const [questionCount, setQuestionCount] = useState(location.state?.name);

  useEffect(() => {
    if (!name) {
      const getSubjectData = async () => {
        const { name, imageSource, questionCount } = await getSubject({
          subjectId: id,
        });
        setName(name);
        setImageSource(imageSource);
        setQuestionCount(questionCount);
      };
      getSubjectData();
    }
    const getData = async () => {
      const { results } = await getQuestionList({ subjectId: id });
      setQuestionList((prev) => [...prev, ...results]);
    };
    getData();
  }, [id, name]);
  return (
    <div className="bg-grayscale-20 relative min-h-screen pb-126">
      <div className="pc:block none absolute z-0 h-234 w-full bg-white" />
      <div className="tablet:bg-size-[1200px_234px] relative flex flex-col items-center gap-12 bg-[url(/src/assets/images/openmind-bg.png)] bg-size-[1200px_177px] bg-top bg-no-repeat px-24">
        <Link to="/list">
          <img
            className="tablet:h-67 tablet:w-170 mt-40 h-49 w-124"
            src={LogoImg}
            alt="로고 이미지"
          />
        </Link>
        <img
          className="tablet:size-136 size-104 rounded-full"
          src={imageSource}
          alt="프로필 이미지"
        />
        <p className="tablet:text-h2 text-h3 font-regular">{name}</p>
        <ul className="flex gap-12">
          <li className="bg-brown-40 size-40 rounded-full"></li>
          <li className="size-40 rounded-full bg-yellow-50"></li>
          <li className="size-40 rounded-full bg-blue-50"></li>
        </ul>
        <div className="border-brown-20 bg-brown-10 tablet:px-32 mt-54 flex min-h-330 w-full max-w-716 flex-col items-center rounded-2xl border px-24 py-16">
          <div>
            <p className="text-body2 tablet:text-body1 text-brown-40 font-regular">
              아직 질문이 없습니다
            </p>
          </div>
          <img className="mt-66 w-114" src={EmptyBox} alt="빈 박스 이미지" />
        </div>
        <Outlet context={{ questionList, questionCount }} />
      </div>
    </div>
  );
};
export default QuestionLayout;
