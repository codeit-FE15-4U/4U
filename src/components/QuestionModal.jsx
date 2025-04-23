import Close from "../assets/icons/close.svg?react";
import MessageImg from "../assets/icons/messages.svg?react";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { getSubject, postQuestion } from "../api/subjects";

const QuestionModal = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState(location.state?.name);
  const [imageSource, setImageSource] = useState(location.state?.imageSource);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchSubjectData = async () => {
      try {
        const { name, imageSource } = await getSubject({ subjectId: id });
        setName(name);
        setImageSource(imageSource);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (location.state?.name && location.state?.imageSource) {
      setName(location.state.name);
      setImageSource(location.state.imageSource);
    } else {
      fetchSubjectData();
    }
  }, [id, location.state]);

  const handleSendMessage = async () => {
    try {
      await postQuestion({ subjectId: id, content: message });
      setMessage("");
      onClose();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="tablet:px-78 fixed inset-0 flex items-center justify-center p-24">
      {/* 모달 배경 */}
      <div className="absolute inset-0 bg-black opacity-56" onClick={onClose} />
      {/* 모달 배경 클릭하면 창 닫기 */}
      <div className="bg-grayscale-10 tablet:min-h-454 tablet:max-w-612 tablet:max-h-454 tablet:px-40 shadow-3pt z-10 min-h-568 w-full min-w-327 flex-col rounded-[24px] p-24">
        {/* 모달 콘텐츠 */}
        <div className="flex items-center justify-between">
          <div className="text-grayscale-60 flex gap-8 text-[20px] leading-25">
            <MessageImg className="size-28" />
            질문을 작성하세요
          </div>
          <button onClick={onClose}>
            <Close className="tablet:size-28 size-22 cursor-pointer" />
          </button>
        </div>

        {/* 질문 받는 사람 */}
        <div className="mt-40 flex items-center gap-4">
          <span className="text-[18px] leading-25">To.</span>
          <div
            className="size-28 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSource})` }}
          />
          <p>{name}</p>
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-grayscale-20 tablet:min-h-180 mt-12 min-h-358 w-full resize-none border-none p-16 focus:outline-none"
          placeholder="질문을 입력해주세요."
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
