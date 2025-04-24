import InputTextarea from "./InputTextarea";
import Close from "../assets/icons/close.svg?react";
import MessageImg from "../assets/icons/messages.svg?react";
import Button from "./Button";
import { useState } from "react";
import { useParams, useLocation } from "react-router";
import { postQuestion } from "../api/subjects";

const QuestionModal = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const location = useLocation();
  const name = location.state?.name;
  const imageSource = location.state?.imageSource;

  const handleSendMessage = async () => {
    try {
      await postQuestion({ subjectId: id, content: message });
      setMessage("");
      onClose();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("질문을 전송하지 못했습니다. 다시 시도해주세요.");
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
        {/* 질문 입력 창 */}
        <InputTextarea
          value={message}
          className="tablet:min-h-180 mt-12 min-h-358 w-full resize-none"
          placeholder="질문을 입력해주세요"
          setValue={setMessage}
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

// 리스트를 셋리스트를 보내는 질문하기에 보내줘서, 셋퀘스천을 사용해서, 퀘스쳔리스트에 내용을 추가해주면된다,
// 퀘스천리스트에 맵으로 넣었는데, 퀘스천리스트에 첫번째 부분에 내용을 추가해주면 될것같습니다
// 리스폰스로 서브젝트아이디 컨텐츠 등등 다옵니다 답변을 받으면, 형태가 똑같이 오내요, 답변을 받아온 부분을 퀘스천리스트에 추가만하면될것같습니다. 제가 셋을 받도록 컨포넌트를 만들어주세요 setQuestionList(prev=>[...new,...prev])
// 마지막에 해보시면 될것같습니다.
//
