import logo from "../assets/images/logo-img.svg";
import UserCard from "../components/UserCard";

function ListPage() {
  return (
    <div className="bg-grayscale-20 w-[375px]">
      <div className="flex flex-col gap-[24px] p-[40px]">
        <img className="m-auto h-[57px] w-[146px]" src={logo}></img>
        <div className="flex justify-center">
          {/* <Button /> */}
          <button className="bg-brown-10 border-brown-40 text-brown-40 h-[34px] w-[127px] rounded-[8px] border text-[14px] font-normal">
            답변하러 가기
          </button>
        </div>
      </div>
      <div className="flex px-[24px]">
        <p className="flex-1 text-[24px] font-normal">누구에게 질문할까요?</p>
        <p className="text-[14px] font-medium">이름순</p> {/* <Dropdown /> */}
      </div>
      <div className="flex flex-wrap gap-[16px] p-[24px]">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <div className="flex justify-center">1 2 3 4 5</div> {/*<Pagenation />*/}
    </div>
  );
}

export default ListPage;
