import Messages from "../../assets/icons/messages.svg?react";

function UserCard({ imageSource, name, questionCount, className, onClick }) {
  return (
    <div
      className={`${className} tablet:h-187 border-grayscale-40 bg-grayscale-10 tablet:p-20 hover:bg-brown-10 hover:border-brown-40 hover:shadow-1pt hover:tablet:p-19 flex h-168 flex-col justify-between rounded-xl border p-16 hover:border-2 hover:p-15`}
      onClick={onClick}
    >
      <div className="flex flex-col gap-12">
        <img
          className="tablet:size-60 size-48 rounded-full"
          src={imageSource}
        />
        <p className="text-body2 tablet:text-body1 font-regular break-all">
          {name}
        </p>
      </div>
      <div className="text-caption1 font-regular text-grayscale-40 tablet:text-body3 flex items-center justify-between">
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
