import { Link, Outlet, useLocation, useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";
import { getQuestionList } from "../api/subjects";
import useSubject from "../hooks/useSubject";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import LogoImg from "../assets/images/logo.png";

const QuestionLayout = () => {
  const [questionList, setQuestionList] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const { name, imageSource, questionCount } = useSubject({
    id,
    subject: location.state,
  });
  const [offset, setOffset] = useState(0);
  const [isMoreQuestion, setIsMoreQuestion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!questionCount) return;
    const getInitialData = async () => {
      setIsLoading(true);
      const { results } = await getQuestionList({ subjectId: id });
      setQuestionList(results);
      setOffset(results.length);
      if (results.length < questionCount) {
        setIsMoreQuestion(true);
      }
      setIsLoading(false);
    };
    getInitialData();
  }, [id, questionCount]);
  const getMoreData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    const { results } = await getQuestionList({ subjectId: id, offset });
    setQuestionList((prev) => [...prev, ...results]);
    setOffset((prev) => prev + results.length);
    if (offset + results.length >= questionCount) {
      setIsMoreQuestion(false);
    }
    setIsLoading(false);
  }, [id, offset, questionCount, isLoading]);
  const { ref } = useInfiniteScroll({ callback: getMoreData, isMoreQuestion });

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
            <li className="bg-brown-40 size-40 rounded-full"></li>
            <li className="size-40 rounded-full bg-yellow-50"></li>
            <li className="size-40 rounded-full bg-blue-50"></li>
          </ul>
        </header>

        <main className="mt-12 flex justify-center">
          <Outlet
            context={{
              questionList,
              questionCount,
              subject: { name, imageSource },
            }}
          />
        </main>
        <div ref={ref}></div>
      </div>
    </div>
  );
};
export default QuestionLayout;
