import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { getUserList } from "../api/subjects";
import logo from "../assets/images/logo.png";
import Arrow from "../assets/icons/arrow.svg?react";
import Button from "../components/Button";
import UserList from "../components/UserList";
import DropdownTrigger from "../components/DropdownTrigger";
import Pagenation from "../components/Pagenation";

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
    const data = localStorage.getItem("subject");
    if (!data) {
      navigate("/");
      return;
    }
    const { id } = JSON.parse(data);
    const selectedUser = users.find((user) => user.id === id);
    id
      ? navigate(`/post/${id}/answer`, { state: { selectedUser } })
      : navigate("/");
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
        <Button type="empty" onClick={handleButtonClick}>
          답변하러 가기
          <Arrow className="text-brown-40 size-18" />
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
      <Pagenation />
    </div>
  );
}

export default ListPage;
