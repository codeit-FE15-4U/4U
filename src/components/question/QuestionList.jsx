import FeedCard from "../feedCard/FeedCard";
import SkeletonFeedCard from "../skeletonUi/SkeletonFeedCard";

const QuestionList = ({
  isInitialLoading,
  isLoading,
  questionList,
  setQuestionCount,
  subject,
  isAnswerPage,
}) => {
  return (
    <ul className="tablet:gap-20 mt-16 flex w-full flex-col gap-16">
      {isInitialLoading
        ? [1, 2, 3].map((key) => (
            <li key={key}>
              <SkeletonFeedCard />
            </li>
          ))
        : questionList.map((question) => {
            return (
              <li key={question.id}>
                <FeedCard
                  isAnswerPage={isAnswerPage}
                  subject={subject}
                  question={question}
                  setQuestionCount={setQuestionCount}
                />
              </li>
            );
          })}
      {isLoading &&
        [1, 2, 3].map((key) => (
          <li key={key}>
            <SkeletonFeedCard />
          </li>
        ))}
    </ul>
  );
};
export default QuestionList;
