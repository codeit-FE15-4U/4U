import { useState } from "react";
import Badge from "../Badge";
import Reaction from "../Reaction";
import FeedCardQuestion from "./FeedCardQuestion";
import FeedCardAnswer from "./FeedCardAnswer";
import FeedCardAnswerInput from "./FeedCardAnswerInput";
import FeedCardDropdown from "./FeedCardDropdown";

function FeedCard({
  isAnswerPage,
  subject,
  question,
  setQuestionCount,
  setDeletedQuestionList,
}) {
  const [isQuestion, setIsQuestion] = useState(!!question);
  const [answer, setAnswer] = useState(question?.answer);
  const [state, setState] = useState(
    (function getState() {
      if (answer) {
        return answer.isRejected ? "rejected" : "sent";
      } else {
        return isAnswerPage ? "empty" : "none";
      }
    })(),
  );

  if (!isQuestion) return;

  try {
    if (!subject) throw Error("Subject does not exist");

    return (
      <div className="tablet:gap-32 tablet:p-32 shadow-1pt font-regular text-grayscale-60 bg-grayscale-10 flex flex-col gap-24 rounded-2xl p-24">
        <div className="flex justify-between">
          <Badge completed={!!answer} />
          {isAnswerPage && (
            <FeedCardDropdown
              setState={setState}
              question={question}
              setIsQuestion={setIsQuestion}
              answer={answer}
              setAnswer={setAnswer}
              setQuestionCount={setQuestionCount}
              setDeletedQuestionList={setDeletedQuestionList}
            />
          )}
        </div>
        <FeedCardQuestion
          content={question.content}
          createdAt={question.createdAt}
        />
        {state === "none" || (
          <FeedCardAnswer state={state} subject={subject} answer={answer}>
            {state === "sent" && (
              <div className="text-body3 break-all whitespace-pre-wrap">
                {answer?.content}
              </div>
            )}
            {state === "rejected" && (
              <div className="text-body3 text-red-50">답변 거절</div>
            )}
            {state === "empty" && (
              <FeedCardAnswerInput
                setState={setState}
                questionId={question.id}
                answer={answer}
                setAnswer={setAnswer}
              />
            )}
          </FeedCardAnswer>
        )}
        <div className="border-grayscale-30 h-43 border-t border-solid pt-24">
          <Reaction question={question} />
        </div>
      </div>
    );
  } catch (e) {
    console.error(e);
    return;
  }
}

export default FeedCard;
