import { useState } from "react";
import { useParams, useLocation } from "react-router";
import { postQuestion } from "../api/questions.js";
import Button from "./Button";
import Close from "../assets/icons/close.svg?react";
import MessageImg from "../assets/icons/messages.svg?react";

const QuestionModal = ({ onClose, setQuestionList }) => {
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const { state } = useLocation();
  const { name, imageSource } = state;
  const handleSendMessage = async () => {
    try {
      const response = await postQuestion({ subjectId: id, content: message });
      console.log(response);
      if (typeof setQuestionList === "function") {
        setQuestionList((prev) => {
          const newList = Array.isArray(prev) ? prev : [];
          return [response, ...newList];
        });
      } else {
        console.warn(
          "setQuestionList가 함수가 아닙니다, 리스트 업데이트를 스킵합니다.",
        );
      } // 머지 전에 모달확인+디버깅체크

      onClose();
    } catch (error) {
      console.error("질문 보내기 실패:", error);
      alert("질문 보내기 실패");
    }
  };

  return (
    <div className="tablet:px-78 fixed inset-0 flex items-center justify-center p-24">
      <div className="absolute inset-0 bg-black opacity-56" onClick={onClose} />
      <div className="bg-grayscale-10 tablet:min-h-454 tablet:max-w-612 tablet:max-h-454 tablet:px-40 shadow-3pt z-10 min-h-568 w-full min-w-327 flex-col rounded-[24px] p-24">
        <div className="flex items-center justify-between">
          <div className="text-grayscale-60 text-body1 flex gap-8">
            <MessageImg className="size-28" />
            질문을 작성하세요
          </div>
          <button onClick={onClose}>
            <Close className="tablet:size-28 size-22 cursor-pointer" />
          </button>
        </div>
        <div className="mt-40 flex items-center gap-4">
          <span className="body2">To.</span>
          <div
            className="size-28 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSource})` }}
          />
          <p>{name}</p>
        </div>
        <textarea
          value={message}
          className="tablet:min-h-180 bg-grayscale-20 text-body3 font-regular border-brown-40 placeholder:text-grayscale-40 mt-12 flex min-h-358 w-full resize-none rounded-lg border-solid p-16 focus:border focus:p-15 focus:outline-none"
          placeholder="질문을 입력해주세요"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          className="mt-8 w-full border-none"
          type="fill"
          disabled={!message}
          onClick={handleSendMessage}
        >
          질문 보내기
        </Button>
      </div>
    </div>
  );
};

export default QuestionModal;
