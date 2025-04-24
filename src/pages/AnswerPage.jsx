import { useCallback, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import QuestionBox from "../components/QuestionBox";
import FeedCard from "../components/FeedCard";
import { deleteSubject } from "../api/subjects";
import Button from "../components/Button";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useSubject from "../hooks/useSubject";
import useInitialQuestion from "../hooks/useInitialQuestion";
import { getQuestionList } from "../api/questions";
import QuestionLayout from "../components/QuestionLayout";

const AnswerPage = () => {
  const [questionList, setQuestionList] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const [offset, setOffset] = useState(0);
  const [isMoreQuestion, setIsMoreQuestion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const { name, imageSource, questionCount } = useSubject({
    id,
    subject: location.state,
  });
  const subject = { name, imageSource };

  const { isInitialLoading } = useInitialQuestion({
    id,
    questionCount,
    setQuestionList,
    setOffset,
    setIsMoreQuestion,
  });

  const getMoreData = useCallback(async () => {
    if (isInitialLoading || isLoading) return;
    setIsLoading(true);
    const { results } = await getQuestionList({ subjectId: id, offset });
    setQuestionList((prev) => [...prev, ...results]);
    setOffset((prev) => prev + results.length);
    if (offset + results.length >= questionCount) {
      setIsMoreQuestion(false);
    }
    setIsLoading(false);
  }, [id, offset, questionCount, isLoading, isInitialLoading]);

  const { ref } = useInfiniteScroll({ callback: getMoreData, isMoreQuestion });

  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await deleteSubject({ subjectId: id });
      localStorage.removeItem("subject");
      navigate("/list");
    } catch {
      alert("삭제를 실패했습니다.");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <QuestionLayout subject={subject}>
      <div className="relative w-full max-w-716">
        <Button
          disabled={isDeleting}
          type="round"
          onClick={handleDelete}
          className="pc:top-10 tablet:top-0 tablet:w-100 tablet:h-35 tablet:text-[15px] absolute top-23 right-0 w-70 text-[10px]/25 font-extralight"
        >
          {isDeleting ? "삭제중" : "삭제하기"}
        </Button>
        <QuestionBox count={questionCount}>
          <ul className="tablet:gap-20 mt-16 flex w-full flex-col gap-16">
            {questionList.map((question) => {
              return (
                <li key={question.id}>
                  <FeedCard
                    isAnswerPage={true}
                    subject={subject}
                    question={question}
                  />
                </li>
              );
            })}
          </ul>
          <div ref={ref}></div>
        </QuestionBox>
      </div>
    </QuestionLayout>
  );
};
export default AnswerPage;
