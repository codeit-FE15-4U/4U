import logo from "../assets/images/logo.png";
import arrow from "../assets/icons/arrow.svg";
import Button from "../components/Button";
import UserCard from "../components/UserCard";

function ListPage() {
  const id = localStorage.getItem("userId");
  const path = id ? `/post/${id}/answer` : "/";

  const handleButtonClick = () => {
    const id = localStorage.getItem("userId");
    !id
      ? (window.location.href = "/")
      : (window.location.href = `/post/${id}/answer`);
  };

  return (
    <div className="bg-grayscale-20">
      <div className="flex flex-col items-center justify-center gap-24 py-40 tablet:flex-row tablet:justify-between px-50">
        <img className="h-57 w-146" src={logo}></img>
        {/* Button 클릭 시 질문 받기로 생성한 id가 로컬 스토리지에 없으면 “/” 페이지로 이동 -> ok */}
        {/* Button 클릭 시 질문 받기로 생성한 id가 로컬 스토리지에 있으면 “/post/{id}/answer” 페이지로 이동 -> 확인필요 */}
        <Button type="empty" onClick={handleButtonClick}>
          답변하러 가기
          <img className="stroke" src={arrow} />
        </Button>
      </div>
      <div className="flex items-center justify-between px-24 tablet:flex-col tablet:gap-4">
        <p className="tablet:text-h1 text-h3 font-regular">
          누구에게 질문할까요?
        </p>
        {/* Dropdown 컴포넌트로 수정 예정 */}
        {/* Dropdown 클릭 시 이름순, 최신순 정렬기능 추가 예정 */}
        <p className="font-medium text-caption1">이름순</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-16 tablet:gap-20">
        {/* UserCard 컴포넌트 내에서 데이터 불러오도록 수정 예정 */}
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      {/* Pagenation 컴포넌트로 수정 예정*/}
      <div className="flex justify-center itmes-center">1 2 3 4 5</div>
    </div>
  );
}

export default ListPage;
