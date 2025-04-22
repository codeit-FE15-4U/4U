import Close from "../assets/icons/close.svg?react";
import MessageImg from "../assets/icons/messages.svg?react";
import Button from "./Button";
import { useState } from "react";

const QuestionModal = ({ onClose }) => {
  const [message, setMessage] = useState("");

  return (
    <div className="tablet:px-78 fixed inset-0 flex items-center justify-center p-24">
      {/* 모달 배경 */}
      <div className="absolute inset-0 bg-black opacity-56" onClick={onClose} />
      {/* 모달 콘텐츠 */}
      <div className="bg-grayscale-10 tablet:min-h-454 tablet:pt-40 tablet:pb-70 tablet:px-40 shadow-3pt z-10 h-568 min-h-568 w-full flex-col rounded-[24px] p-24">
        <div className="flex items-center justify-between">
          <div className="text-grayscale-60 flex gap-8 text-[20px]">
            <MessageImg className="size-28" />
            질문을 작성하세요
          </div>
          <button onClick={onClose}>
            <Close className="tablet:size-28 size-22 cursor-pointer" />
          </button>
        </div>
        <div className="mt-40">To.</div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-grayscale-20 tablet:min-h-180 mt-12 min-h-358 w-full resize-none border-none p-16 focus:outline-none"
          placeholder="질문을 입력해주세요."
        />

        <Button
          className="mt-8 w-full border-none"
          type="fill"
          disabled={!message.trim()}
        >
          질문 보내기
        </Button>
      </div>
    </div>
  );
};

export default QuestionModal;
