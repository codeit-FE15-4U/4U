import FeedCard from "../feedCard/FeedCard";
import SkeletonFeedCard from "../SkeletonUi/SkeletonFeedCard";

const QuestionList = ({
  isInitialLoading,
  questionList,
  subject,
  isLoading,
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
