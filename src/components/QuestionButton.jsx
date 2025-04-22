import { useState } from "react";
import QuestionModal from "./QuestionModal"; // 팀원이 만든다고 가정
import Button from "./Button";

const QuestionButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <Button
        type="round"
        className="tablet:px-49.5 fixed right-24 bottom-24 px-24 py-14.5 text-[20px] disabled:opacity-50"
        onClick={handleOpen}
        disabled={isModalOpen}
      >
        <span className="tablet:hidden inline">질문 작성</span>
        <span className="tablet:inline hidden">질문 작성하기</span>
      </Button>

      {isModalOpen && <QuestionModal onClose={handleClose} />}
    </>
  );
};

export default QuestionButton;
