import LogoImg from "../assets/images/logo.png";
import { Link, Outlet, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getQuestionList, getSubject } from "../api/subjects";
import UrlShareButton from "./UrlShareButton";

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
          <div
            className="tablet:size-136 size-104 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSource})` }}
          />
          <p className="tablet:text-h2 text-h3 font-regular">{name}</p>
          <ul className="flex gap-12">
            <li>
              <UrlShareButton />
            </li>
            <li className="size-40 rounded-full bg-yellow-50"></li>
            <li className="size-40 rounded-full bg-blue-50"></li>
          </ul>
        </header>

        <main className="mt-12 flex justify-center">
          <Outlet
            context={{
              questionList,
              questionCount,
              subject: { name, imageSource, id },
            }}
          />
        </main>
      </div>
    </div>
  );
};
export default QuestionLayout;
