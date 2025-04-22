import FeedCardAnswerInput from "./FeedCardAnswerInput";
import getDurationString from "../utils/getDurationString";

function FeedCardAnswer({ state, setState, subject, questionId, answer }) {
  return (
    <div className="flex flex-row gap-12">
      <div
        className="tablet:size-48 bg-grayscale-30 size-32 rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${subject.imageSource})` }}
      />
      <section className="grow">
        <div className="mb-4 flex flex-row items-center gap-8">
          <div className="text-caption1 tablet:text-body2">{subject.name}</div>
          <div className="text-caption1 text-grayscale-40 font-medium">
            {state === "empty" || getDurationString(answer?.createdAt) + "전"}
          </div>
        </div>
        {state === "sent" && (
          <div className="text-body3">{answer?.content}</div>
        )}
        {state === "rejected" && (
          <div className="text-body3 text-red-50">답변 거절</div>
        )}
        {state === "empty" && (
          <FeedCardAnswerInput
            setState={setState}
            questionId={questionId}
            answer={answer}
          />
        )}
      </section>
    </div>
  );
}

export default FeedCardAnswer;
