import LogoImg from "../assets/images/logo.png";
import EmptyBox from "../assets/images/empty-box.svg";
import { Link, Outlet, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getQuestionList, getSubject } from "../api/subjects";

const QuestionLayout = () => {
  const [questionList, setQuestionList] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const [name, setName] = useState(location.state?.name);
  const [imageSource, setImageSource] = useState(location.state?.imageSource);
  const [questionCount, setQuestionCount] = useState(
    location.state?.questionCount,
  );

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
  }, [name, id]);
  useEffect(() => {
    const getData = async () => {
      const { results } = await getQuestionList({ subjectId: id });
      setQuestionList((prev) => [...prev, ...results]);
    };
    getData();
  }, [id]);
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
        <div
          className="tablet:size-136 size-104 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSource})` }}
        />
        <p className="tablet:text-h2 text-h3 font-regular">{name}</p>
        <ul className="flex gap-12">
          <li className="bg-brown-40 size-40 rounded-full"></li>
          <li className="size-40 rounded-full bg-yellow-50"></li>
          <li className="size-40 rounded-full bg-blue-50"></li>
        </ul>

        <Outlet
          context={{
            questionList,
            questionCount,
            subject: { name, imageSource },
          }}
        />
      </div>
    </div>
  );
};
export default QuestionLayout;
