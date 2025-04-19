import messages from "../assets/icons/messages.svg";

function UserCard({ imageSource, name, questionCount }) {
  return (
    <>
      <div className="flex flex-col gap-12">
        <img className="w-48 h-48 rounded-full" src={imageSource} />
        <p className="text-body2 font-regular">{name}</p>
      </div>
      <div className="flex items-center justify-between text-caption1 font-regular text-grayscale-40">
        <div className="flex items-center justify-center gap-4">
          {/* messages icon 색상 변경 필요 */}
          <img className="size-16" src={messages} />
          <span>받은 질문</span>
        </div>
        <p>{questionCount}개</p>
      </div>
    </>
  );
}

export default UserCard;
