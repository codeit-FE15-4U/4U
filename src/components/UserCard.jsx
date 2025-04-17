import profile from "../assets/images/profile.svg";
import messages from "../assets/icons/messages.svg";
function UserCard() {
  return (
    <>
      <div className="border-grayscale-40 flex h-[168px] w-[154px] flex-col gap-[32px] rounded-[16px] border p-[16px]">
        <div className="flex flex-col gap-[12px]">
          <img className="h-[48px] w-[48px]" src={profile}></img>
          <div className="text-body2 font-regular">이름</div>
        </div>
        <div className="flex">
          <img className="h-[16px] w-[16px]" src={messages}></img>
          <span className="text-caption1 font-regular flex-1">받은 질문</span>
          <span className="text-caption1 font-regular">9개</span>
        </div>
      </div>
    </>
  );
}

export default UserCard;
