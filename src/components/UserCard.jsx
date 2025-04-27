import Messages from "../assets/icons/messages.svg?react";

function UserCard({ imageSource, name, questionCount, className, onClick }) {
  return (
    <div
      className={`${className} tablet:h-187 border-grayscale-40 bg-grayscale-10 flex h-168 flex-col justify-between rounded-xl border p-16`}
      onClick={onClick}
    >
      <div className="flex flex-col gap-12">
        <img className="h-48 w-48 rounded-full" src={imageSource} />
        <p className="text-body2 font-regular">{name}</p>
      </div>
      <div className="text-caption1 font-regular text-grayscale-40 flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <Messages className="tablet:size-18 size-16" />
          <span>받은 질문</span>
        </div>
        <p>{questionCount}개</p>
      </div>
    </div>
  );
}

export default UserCard;
