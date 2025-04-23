import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import { getUserList } from "../api/subjects";
import logo from "../assets/images/logo.png";
import arrow from "../assets/icons/arrow.svg";
import Button from "../components/Button";
import UserList from "../components/UserList";
import { useNavigate } from "react-router";
import DropdownTrigger from "../components/DropdownTrigger";

function ListPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [sort, setSort] = useState("createdAt");

  const handleLatestClick = () => setSort("createdAt");
  const handleNameClick = () => setSort("name");

  const options = [
    { label: "최신순", value: "createdAt", click: handleLatestClick },
    { label: "이름순", value: "name", click: handleNameClick },
  ];

  const handleButtonClick = () => {
    const id = localStorage.getItem("userId");
    id ? navigate(`/post/${id}/answer`) : navigate("/");
  };
  const getUser = useCallback(async (options) => {
    const user = await getUserList(options);
    setUsers(user.data.results);
  }, []);

  useEffect(() => {
    getUser({ limit: 6, offset: 0, sort });
  }, [getUser, sort]);

  return (
    <div className="bg-grayscale-20">
      <div className="tablet:flex-row tablet:justify-between flex flex-col items-center justify-center gap-24 px-50 pt-40 pb-60">
        <Link to="/">
          <img className="h-57 w-146" src={logo}></img>
        </Link>
        {/* Button 클릭 시 질문 받기로 생성한 id가 로컬 스토리지에 없으면 “/” 페이지로 이동 -> ok */}
        {/* Button 클릭 시 질문 받기로 생성한 id가 로컬 스토리지에 있으면 “/post/{id}/answer” 페이지로 이동 -> 확인필요 */}
        <Button type="empty" onClick={handleButtonClick}>
          답변하러 가기
          {/* arrow icon 색상 변경 필요 */}
          <img className="stroke" src={arrow} />
        </Button>
      </div>
      <div className="tablet:gap-32 tablet:px-50 flex flex-col gap-20 px-24">
        <div className="tablet:flex-col tablet:gap-20 flex items-center justify-between">
          <p className="tablet:text-h1 text-h3 font-regular">
            누구에게 질문할까요?
          </p>
          <DropdownTrigger options={options} type="user" />
        </div>
        <div className="tablet:gap-20 flex flex-wrap items-center justify-center gap-16">
          <UserList users={users} />
        </div>
      </div>
      {/* Pagenation 컴포넌트로 수정 예정*/}
      <div className="flex items-center justify-center">1 2 3 4 5</div>
    </div>
  );
}

export default ListPage;
