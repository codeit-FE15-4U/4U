import { useCallback, useState } from "react";
import { useParams } from "react-router";
import QuestionBox from "../components/QuestionBox";
import FeedCard from "../components/FeedCard";
import QuestionButton from "../components/QuestionButton";
import useSubject from "../hooks/useSubject";
import useInitialQuestion from "../hooks/useInitialQuestion";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { getQuestionList } from "../api/questions";
import QuestionContainer from "../components/QuestionContainer";

const QuestionPage = () => {
  const [questionList, setQuestionList] = useState([]);
  const { id } = useParams();

  const [offset, setOffset] = useState(0);
  const [isMoreQuestion, setIsMoreQuestion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { subjectData, questionCount, setQuestionCount } = useSubject({
    id,
    subject: location.state,
  });

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
  return (
    <QuestionContainer subject={subjectData}>
      <QuestionBox count={questionCount}>
        <ul className="tablet:gap-20 mt-16 flex w-full flex-col gap-16">
          {questionList.map((question) => {
            return (
              <li key={question.id}>
                <FeedCard
                  isAnswerPage={false}
                  subject={subjectData}
                  question={question}
                />
              </li>
            );
          })}
        </ul>
        <div ref={ref}></div>
      </QuestionBox>
      <QuestionButton
        setQuestionList={setQuestionList}
        setQuestionCount={setQuestionCount}
        subject={subjectData}
      />
    </QuestionContainer>
  );
};
export default QuestionPage;
