import logo from "../assets/images/logo.svg";
import UserCard from "../components/UserCard";

function ListPage() {
  return (
    <div className="bg-grayscale-20">
      <div className="tablet:flex-row tablet:justify-between flex flex-col items-center justify-center gap-[24px] px-[50px] py-[40px]">
        <img className="h-[57px] w-[146px]" src={logo}></img>
        {/* Button 클릭 시 메인 or 답변 페이지로 이동 예정 */}
        <button>답변하러 가기</button>
      </div>
      <div className="tablet:flex-col tablet:gap-[4px] flex items-center justify-between px-[24px]">
        <p className="tablet:text-h1 text-h3 font-regular">
          누구에게 질문할까요?
        </p>
        {/* Dropdown 컴포넌트로 수정 예정 */}
        {/* Dropdown 클릭 시 이름순, 최신순 정렬기능 추가 예정 */}
        <p className="text-caption1 font-medium">이름순</p>
      </div>
      <div className="tablet:gap-[20px] flex flex-wrap items-center justify-center gap-[16px]">
        {/* UserCard 컴포넌트 내에서 데이터 불러오도록 수정 예정 */}
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      {/* Pagenation 컴포넌트로 수정 예정*/}
      <div className="itmes-center flex justify-center">1 2 3 4 5</div>
    </div>
  );
}

export default ListPage;
