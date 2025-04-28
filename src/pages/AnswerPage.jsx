import { useCallback, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import { getQuestionList } from "../api/questions";
import QuestionBox from "../components/QuestionBox";
import QuestionContainer from "../components/QuestionContainer";
import QuestionList from "./../components/QuestionList";
import DeleteButton from "../components/DeleteButton";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useSubject from "../hooks/useSubject";
import useInitialQuestion from "../hooks/useInitialQuestion";

const AnswerPage = () => {
  const [questionList, setQuestionList] = useState([]);
  const { id } = useParams();
  const [offset, setOffset] = useState(0);
  const [isMoreQuestion, setIsMoreQuestion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { subject, questionCount } = useSubject(id);

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

  useEffect(() => window.scrollTo(0, 0), []);

  const localSubjects = JSON.parse(localStorage.getItem("subjects") || "[]");
  const isId = localSubjects.some((subject) => subject.id === +id);
  if (!isId) {
    return <Navigate to={`/post/${id}`} replace />;
  }

  return (
    <QuestionContainer subject={subject}>
      <div className="relative w-full max-w-716">
        <DeleteButton id={id} />
        <QuestionBox count={questionCount}>
          <QuestionList
            isInitialLoading={isInitialLoading}
            isLoading={isLoading}
            questionList={questionList}
            subject={subject}
            isAnswerPage={true}
          />
          <div ref={ref}></div>
        </QuestionBox>
      </div>
    </QuestionContainer>
  );
};
export default AnswerPage;
