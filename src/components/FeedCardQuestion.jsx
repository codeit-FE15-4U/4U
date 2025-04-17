import getDurationString from "../utils/getDurationString.js";

export default function FeedCardQuestion({ content, createdAt }) {
  return (
    <div>
      <div className="text-caption1 text-grayscale-40 mb-4 font-medium">{`질문 · ${getDurationString(createdAt)}전`}</div>
      <div className="text-body3 tablet:text-body2">{content}</div>
    </div>
  );
}
