import logo from "../assets/images/logo-img.svg";
import profile from "../assets/images/profile-img.svg";
import messages from "../assets/icons/messages-icon.svg";

function ListPage() {
  return (
    <div className="bg-grayscale-20 w-[375px]">
      <img className="m-auto h-[57px] w-[146px]" src={logo}></img>
      <div className="flex justify-center">
        <button className="bg-brown-10 border-brown-40 text-brown-40 h-[34px] w-[127px] rounded-[8px] border text-[14px] font-normal">
          답변하러 가기
        </button>
      </div>
      {/* <Button /> */}
      <div className="flex px-[24px]">
        <p className="flex-1 text-[24px] font-normal">누구에게 질문할까요?</p>
        <p className="text-[14px] font-medium">이름순</p> {/* <Dropdown /> */}
      </div>
      <div className="px-[24px]">
        <div className="border-grayscale-40 flex h-[168px] w-[156px] flex-col gap-[32px] rounded-[16px] border p-[16px]">
          {/* <UserCard /> */}
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
      </div>
      <div className="flex justify-center">1 2 3 4 5</div> {/*<Pagenation />*/}
    </div>
  );
}

export default ListPage;
