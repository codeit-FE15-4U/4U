import { useState } from "react";
import Badge from "./Badge";
import Reaction from "./Reaction";
import FeedCardQuestion from "./FeedCardQuestion";
import FeedCardAnswer from "./FeedCardAnswer";
import iconMore from "../assets/icons/more.svg";

export default function FeedCard({ isAnswerPage, subject, question }) {
  const [state, setState] = useState(
    (function getState() {
      if (question.answer) {
        return question.answer.isRejected ? "rejected" : "sent";
      } else {
        return isAnswerPage ? "empty" : "none";
      }
    })(),
  );

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
        {state === "none" && (
          <FeedCardAnswer
            state={state}
            setState={setState}
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
