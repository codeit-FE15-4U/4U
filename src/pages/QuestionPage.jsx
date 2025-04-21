import { useOutletContext } from "react-router";
import QuestionBox from "../components/QuestionBox";
import FeedCard from "../components/FeedCard";

const QuestionPage = () => {
  const { questionList, questionCount, subject } = useOutletContext();
  return (
    <QuestionBox count={questionCount}>
      <ul className="tablet:gap-20 mt-16 flex w-full flex-col gap-16">
        {questionList.map((question) => {
          return (
            <li id={question.id} className="">
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
  );
};
export default QuestionPage;
