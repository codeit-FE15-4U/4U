import { useRef, useState } from "react";
import { useParams } from "react-router";
import { postQuestion } from "../../api/questions.js";
import InputTextarea from "../InputTextarea.jsx";
import Button from "../Button";
import Close from "../../assets/icons/close.svg?react";
import MessageImg from "../../assets/icons/messages.svg?react";

const QuestionModal = ({
  onClose,
  setQuestionList,
  subject,
  setQuestionCount,
}) => {
  const message = useRef();
  const [disabled, setDisabled] = useState(true);
  const { id } = useParams();
  const name = subject.name;
  const imageSource = subject.imageSource;

  const handleSendMessage = async () => {
    try {
      setDisabled(true);
      const response = await postQuestion({
        subjectId: id,
        content: message.current.value,
      });
      if (typeof setQuestionList === "function") {
        setQuestionList((prev) => {
          const newList = Array.isArray(prev) ? prev : [];
          return [response, ...newList];
        });
      }
      setQuestionCount((prev) => prev + 1);
      onClose();
    } catch (error) {
      console.error("질문 보내기 실패:", error);
      alert("질문 보내기 실패");
      setDisabled(false);
    }
  };

  const handleChange = () => {
    setDisabled(message.current.value ? false : true);
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
        <InputTextarea
          ref={message}
          className="tablet:min-h-180 mt-12 flex min-h-358 w-full"
          placeholder="질문을 입력해주세요"
          onChange={handleChange}
        />
        <Button
          className="mt-8 w-full border-none"
          type="fill"
          disabled={disabled}
          onClick={handleSendMessage}
        >
          질문 보내기
        </Button>
      </div>
    </div>
  );
};

export default QuestionModal;
