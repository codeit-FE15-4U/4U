// import FeedCardAnswerInput from "./FeedCardAnswerInput";
import getDurationString from "../utils/getDurationString";

export default function FeedCardAnswer({ state, setState, subject, answer }) {
  return (
    <div className="flex flex-row gap-12">
      <div
        className="tablet:size-48 bg-grayscale-30 size-32 rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${subject.imageSource})` }}
      />
      <section>
        <div className="mb-4 flex flex-row items-center gap-8">
          <div className="text-caption1 tablet:text-body2">{subject.name}</div>
          <div className="text-caption1 text-grayscale-40 font-medium">
            {state === "empty" || getDurationString(answer?.createdAt) + "전"}
          </div>
        </div>
        {(function (state) {
          switch (state) {
            case "sent":
              return <div className="text-body3">{answer?.content}</div>;
            case "rejected":
              return <div className="text-body3 text-red-50">답변 거절</div>;
            case "empty":
            // return <FeedCardAnswerInput setState={setState} content={answer?.content} />;
            default:
              return;
          }
        })(state)}
      </section>
    </div>
  );
}
