import { useOutletContext } from "react-router";
import QuestionBox from "../components/QuestionBox";
import FeedCard from "../components/FeedCard";
import Button from "../components/Button";

const QuestionPage = () => {
  const { questionList, questionCount, subject } = useOutletContext();
  return (
    <>
      <QuestionBox count={questionCount}>
        <ul className="tablet:gap-20 mt-16 flex w-full flex-col gap-16">
          {questionList.map((question) => {
            return (
              <li key={question.id} className="">
                <FeedCard
                  isAnswerPage={false}
                  subject={subject}
                  question={question}
                />
              </li>
            );
          })}
        </ul>
      </QuestionBox>
      <Button type="round" className="fixed right-24 bottom-24">
        질문 작성하기
      </Button>
    </>
  );
};
export default QuestionPage;
