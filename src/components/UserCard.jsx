import profile from "../assets/images/profile.png";
import messages from "../assets/icons/messages.svg";
import { getUserList } from "../api/subjects";
import { useEffect } from "react";

function UserCard() {
  const getUser = async () => {
    const user = await getUserList({ limit: 6, offset: 0 });
    console.log(user.data.results);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div className="border-grayscale-40 flex h-[168px] w-[154px] flex-col gap-[32px] rounded-[16px] border p-[16px]">
        <div className="flex flex-col gap-[12px]">
          <img className="h-[48px] w-[48px]" src={profile}></img>
          <div className="text-[18px] font-normal">이름</div>
        </div>
        <div className="flex">
          <img className="h-[16px] w-[16px]" src={messages}></img>
          <span className="flex-1 text-[14px] font-normal">받은 질문</span>
          <span className="text-[14px] font-normal">9개</span>
        </div>
      </div>
    </>
  );
}

export default UserCard;
