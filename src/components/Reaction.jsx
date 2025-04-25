import Thumbsup from "../assets/icons/thumbs-up.svg?react";
import Thumbsdown from "../assets/icons/thumbs-down.svg?react";

const Reaction = () => {
  return (
    <ui className="flex items-center justify-center gap-32 text-[14px]">
      <li className="text-grayscale-40 hover:text-grayscale-60 flex cursor-pointer items-center gap-6">
        <Thumbsup className="size-16" />
        좋아요
      </li>
      <li className="text-grayscale-40 hover:text-grayscale-60 flex cursor-pointer items-center gap-6">
        <Thumbsdown className="size-16" />
        싫어요
      </li>
    </ui>
  );
};

export default Reaction;
