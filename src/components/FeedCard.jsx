import Badge from "./Badge.jsx";
import Reaction from "./Reaction.jsx";
import FeedCardQuestion from "./FeedCardQuestion.jsx";
import iconMore from "../assets/icons/more.svg";

export default function FeedCard({
  isAnswerPage,
  content,
  like,
  dislike,
  createdAt,
  answer,
}) {
  return (
    <div className="tablet:gap-32 tablet:p-32 shadow-1px font-regular text-grayscale-60 bg-grayscale-10 flex flex-col gap-24 rounded-2xl p-24">
      <div className="flex h-26 justify-between">
        <Badge />
        {isAnswerPage && <img className="h-26" src={iconMore} />}
      </div>
      <FeedCardQuestion content={content} createdAt={createdAt} />
      {(isAnswerPage || answer) && (
        <FeedCardAnswer isAnswerPage={isAnswerPage} {...answer} />
      )}
      <div className="border-grayscale-30 h-43 border-t border-solid">
        <Reaction like={like} dislike={dislike} />
      </div>
    </div>
  );
}

function FeedCardAnswer() {
  return;
}
