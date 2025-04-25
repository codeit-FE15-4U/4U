import Thumbsup from "../assets/icons/thumbs-up.svg?react";
import Thumbsdown from "../assets/icons/thumbs-down.svg?react";

const Reaction = () => {
  return (
    <ul className="text-caption1 flex items-center justify-center gap-32">
      <li className="text-grayscale-40 flex cursor-pointer items-center gap-6">
        <Thumbsup className="size-16" />
        좋아요
      </li>
      <li className="text-grayscale-40 flex cursor-pointer items-center gap-6">
        <Thumbsdown className="size-16" />
        싫어요
      </li>
    </ul>
  );
};

export default Reaction;
