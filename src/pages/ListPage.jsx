import { useEffect, useState } from "react";
import { getUserList } from "../api/subjects";
import logo from "../assets/images/logo.png";
import arrow from "../assets/icons/arrow.svg";
import Button from "../components/Button";
import UserList from "../components/UserList";
import { useNavigate } from "react-router";

function ListPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const id = localStorage.getItem("userId");
    id ? navigate(`/post/${id}/answer`) : navigate("/");
  };
  const getUser = async () => {
    const user = await getUserList({ limit: 6, offset: 0 });
    setUsers(user.data.results);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="bg-grayscale-20">
      <div className="flex flex-col items-center justify-center gap-24 pt-40 tablet:flex-row tablet:justify-between px-50 pb-60">
        <img className="h-57 w-146" src={logo}></img>
        {/* Button 클릭 시 질문 받기로 생성한 id가 로컬 스토리지에 없으면 “/” 페이지로 이동 -> ok */}
        {/* Button 클릭 시 질문 받기로 생성한 id가 로컬 스토리지에 있으면 “/post/{id}/answer” 페이지로 이동 -> 확인필요 */}
        <Button type="empty" onclick={handleButtonClick}>
          답변하러 가기
          {/* arrow icon 색상 변경 필요 */}
          <img className="stroke" src={arrow} />
        </Button>
      </div>
      <div className="flex flex-col gap-20 px-24 tablet:gap-32 tablet:px-50">
        <div className="flex items-center justify-between tablet:flex-col tablet:gap-20">
          <p className="tablet:text-h1 text-h3 font-regular">
            누구에게 질문할까요?
          </p>
          {/* Dropdown 컴포넌트로 수정 예정 */}
          {/* Dropdown 클릭 시 이름순, 최신순 정렬기능 추가 예정 */}
          <p className="px-12 py-8 font-medium border rounded-lg text-caption1">
            이름순
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-16 tablet:gap-20">
          <UserList users={users} />
        </div>
      </div>
      {/* Pagenation 컴포넌트로 수정 예정*/}
      <div className="flex justify-center itmes-center">1 2 3 4 5</div>
    </div>
  );
}

export default ListPage;
