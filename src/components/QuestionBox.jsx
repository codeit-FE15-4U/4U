import MessageIcon from "../assets/icons/messages.svg?react";
import EmptyBox from "../assets/images/empty-box.svg";

const QuestionBox = ({ children, count }) => {
  const text = count ? `${count}개의 질문이 있습니다.` : "아직 질문이 없습니다";
  return (
    <div className="border-brown-20 bg-brown-10 mt-54 flex min-h-330 w-full max-w-716 flex-col items-center rounded-2xl border px-16 py-16">
      <div className="text-brown-40 font-regular text-body2 tablet:text-body1 flex items-center gap-8">
        <MessageIcon />
        <p>{text}</p>
      </div>
      {count ? (
        children
      ) : (
        <img className="mt-66 w-114" src={EmptyBox} alt="빈 박스 이미지" />
      )}
    </div>
  );
};
export default QuestionBox;
