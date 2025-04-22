import { useOutletContext } from "react-router";
import QuestionBox from "../components/QuestionBox";
import FeedCard from "../components/FeedCard";
import Button from "../components/Button";

const AnswerPage = () => {
  const { questionList, questionCount, subject } = useOutletContext();
  return (
    <div className="relative w-full max-w-716">
      <Button
        type="round"
        className="pc:-top-3 tablet:-top-13 absolute right-0"
      >
        삭제하기
      </Button>
      <QuestionBox count={questionCount}>
        <ul className="tablet:gap-20 mt-16 flex w-full flex-col gap-16">
          {questionList.map((question) => {
            return (
              <li key={question.id} className="">
                <FeedCard
                  isAnswerPage={true}
                  subject={subject}
                  question={question}
                />
              </li>
            );
          })}
        </ul>
      </QuestionBox>
    </div>
  );
};
export default AnswerPage;
