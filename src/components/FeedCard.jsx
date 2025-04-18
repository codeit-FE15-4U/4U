import Badge from "./Badge.jsx";
import Reaction from "./Reaction.jsx";
import FeedCardQuestion from "./FeedCardQuestion.jsx";
import FeedCardAnswer from "./FeedCardAnswer.jsx";
import iconMore from "../assets/icons/more.svg";

export default function FeedCard({ isAnswerPage, subject, question }) {
  try {
    return (
      <div className="tablet:gap-32 tablet:p-32 shadow-1px font-regular text-grayscale-60 bg-grayscale-10 flex flex-col gap-24 rounded-2xl p-24">
        <div className="flex h-26 justify-between">
          <Badge />
          {isAnswerPage && <img className="h-26" src={iconMore} />}
        </div>
        <FeedCardQuestion
          content={question.content}
          createdAt={question.createdAt}
        />
        {(isAnswerPage || question.answer) && (
          <FeedCardAnswer
            isAnswerPage={isAnswerPage}
            subject={subject}
            answer={question.answer}
          />
        )}
        <div className="border-grayscale-30 h-43 border-t border-solid">
          <Reaction like={question.like} dislike={question.dislike} />
        </div>
      </div>
    );
  } catch (e) {
    return;
  }
}
