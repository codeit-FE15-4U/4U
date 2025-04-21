import messages from "../assets/icons/messages.svg";

function UserCard({ imageSource, name, questionCount }) {
  return (
    <div className="tablet:h-187 border-grayscale-40 bg-grayscale-10 flex h-168 flex-col justify-between rounded-xl border p-16">
      <div className="flex flex-col gap-12">
        {/* <div className="tablet:min-w-[186px] w-full max-w-[220px] min-w-[155px]"> */}

        <img className="h-48 w-48 rounded-full" src={imageSource} />
        <p className="text-body2 font-regular">{name}</p>
      </div>
      <div className="text-caption1 font-regular text-grayscale-40 flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          {/* messages icon 색상 변경 필요 */}
          <img className="size-16" src={messages} />
          <span>받은 질문</span>
        </div>
        <p>{questionCount}개</p>
      </div>
    </div>
  );
}

export default UserCard;
