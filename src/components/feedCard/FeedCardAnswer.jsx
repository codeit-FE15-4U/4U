import getDurationString from "../../utils/getDurationString";

function FeedCardAnswer({ state, subject, answer, children }) {
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
        {children}
      </section>
    </div>
  );
}

export default FeedCardAnswer;
