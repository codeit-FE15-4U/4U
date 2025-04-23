const QuestionModal = ({ onClose }) => {
  return (
    <div className="tablet:px-78 fixed inset-0 flex items-center justify-center p-24">
      {/* 모달 배경 */}
      <div className="absolute inset-0 bg-black opacity-56" onClick={onClose} />
      {/* 모달 콘텐츠 */}
      <div className="bg-grayscale-10 tablet:min-h-454 tablet:max-w-612 tablet:max-h-454 tablet:px-40 shadow-3pt z-10 min-h-568 w-full min-w-327 flex-col rounded-[24px] p-24"></div>
    </div>
  );
};

export default QuestionModal;
