import Button from "./Button";

const DeleteModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="tablet:px-78 fixed inset-0 z-50 flex items-center justify-center p-24">
      <div
        className="absolute inset-0 bg-black opacity-56"
        onClick={onCancel}
      />
      <div className="bg-grayscale-10 shadow-3pt tablet:h-230 z-10 flex h-300 w-390 flex-col justify-between gap-24 rounded-3xl p-40">
        <div className="text-grayscale-60 flex flex-col items-center justify-center gap-20 text-center">
          <p className="text-h3 font-bold">정말 삭제하시겠습니까?</p>
          <p className="text-body1">
            모든 질문과 답변이 삭제되며, 이 작업은 되돌릴 수 없습니다.
          </p>
        </div>
        <div className="tablet:flex-row flex flex-col-reverse justify-between gap-10">
          <Button
            type="empty"
            onClick={onCancel}
            className="tablet:w-100 tablet:h-40 w-full"
          >
            취소
          </Button>
          <Button
            type="fill"
            className="tablet:w-100 tablet:h-40 w-full bg-red-50 active:bg-red-200"
            onClick={onConfirm}
          >
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
