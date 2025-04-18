import logo from "../assets/images/logo-img.svg";
import Dropdown from "../components/Dropdown";
import UserCard from "../components/UserCard";

function ListPage() {
  return (
    <div className="bg-grayscale-20 w-[375px]">
      <div className="flex flex-col gap-[24px] p-[40px]">
        <img className="m-auto h-[57px] w-[146px]" src={logo}></img>
        <div className="flex justify-center">
          {/* Button 컴포넌트로 수정 예정 */}
          {/* Button 클릭 시 메인 or 답변 페이지로 이동 예정 */}
          <button className="bg-brown-10 border-brown-40 text-brown-40 h-[34px] w-[127px] rounded-[8px] border text-[14px] font-normal">
            답변하러 가기
          </button>
        </div>
      </div>
      <div className="flex px-[24px]">
        <p className="flex-1 text-[24px] font-normal">누구에게 질문할까요?</p>
        {/* Dropdown 컴포넌트로 수정 예정 */}
        {/* Dropdown 클릭 시 이름순, 최신순 정렬기능 추가 예정 */} <Dropdown />
      </div>
      <div className="flex flex-wrap gap-[16px] p-[24px]">
        {/* UserCard 컴포넌트 내에서 데이터 불러오도록 수정 예정 */}
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      {/* Pagenation 컴포넌트로 수정 예정*/}
      <div className="flex justify-center">1 2 3 4 5</div>
    </div>
  );
}

export default ListPage;
