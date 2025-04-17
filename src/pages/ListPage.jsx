import { Link } from "react-router";
import logo from "../assets/images/logo.svg";
import Button from "../components/Button";
import UserCard from "../components/UserCard";

function ListPage() {
  const id = localStorage.getItem("userId");
  const path = id ? `/post/${id}/answer` : "/";

  return (
    <div className="bg-grayscale-20">
      <div className="tablet:flex-row tablet:justify-between flex flex-col items-center justify-center gap-24 px-50 py-40">
        <img className="h-57 w-146" src={logo}></img>
        {/* Button 클릭 시 메인 or 답변 페이지로 이동 예정 */}
        <Link to={path}>
          <Button content="답변하러 가기" />
        </Link>
      </div>
      <div className="tablet:flex-col tablet:gap-4 flex items-center justify-between px-24">
        <p className="tablet:text-h1 text-h3 font-regular">
          누구에게 질문할까요?
        </p>
        {/* Dropdown 컴포넌트로 수정 예정 */}
        {/* Dropdown 클릭 시 이름순, 최신순 정렬기능 추가 예정 */}
        <p className="text-caption1 font-medium">이름순</p>
      </div>
      <div className="tablet:gap-[20px] flex flex-wrap items-center justify-center gap-16">
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
