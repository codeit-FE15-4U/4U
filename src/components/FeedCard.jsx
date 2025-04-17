import Badge from "./Badge.jsx";
import Reaction from "./Reaction.jsx";
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
    <div className="flex flex-col gap-[1.5rem] rounded-2xl p-[1.5rem] shadow-[var(--shadow-1px)] md:gap-[2rem] md:p-[2rem]">
      <div className="flex h-[calc(26rem/16)] justify-between">
        <Badge />
        {isAnswerPage && <img className="h-[calc(26rem/16)]" src={iconMore} />}
      </div>
      <FeedCardQuestion content={content} createdAt={createdAt} />
      {(isAnswerPage || answer) && (
        <FeedCardAnswer isAnswerPage={isAnswerPage} {...answer} />
      )}
      <div className="h-[calc(43rem/16)] border-t border-solid border-(--color-grayscale-30)">
        <Reaction like={like} dislike={dislike} />
      </div>
    </div>
  );
}

function FeedCardQuestion() {
  return;
}

function FeedCardAnswer() {
  return;
}
