import messages from "../assets/icons/messages.svg";
import { getUserList } from "../api/subjects";
import { useEffect, useState } from "react";

function UserList({ user }) {
  return (
    <>
      <div className="flex flex-col gap-12">
        <img className="h-48 w-48 rounded-full" src={user.imageSource} />
        <p className="text-body2 font-regular">{user.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          {/* messages icon 색상 변경 필요 */}
          <img className="h-16 w-16" src={messages}></img>
          <span className="text-caption1 font-regular text-grayscale-40">
            받은 질문
          </span>
        </div>
        <p className="text-caption1 font-regular text-grayscale-40">
          {user.questionCount}개
        </p>
      </div>
    </>
  );
}

function UserCard() {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const user = await getUserList({ limit: 6, offset: 0 });
    setUsers(user.data.results);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <ul className="flex flex-wrap justify-center gap-16">
      {users.map((user) => {
        return (
          // 카드 너비 반응형 구현 필요
          <li
            className="tablet:h-187 border-grayscale-40 bg-grayscale-10 flex h-168 w-155 flex-col justify-between rounded-xl border p-16"
            key={user.id}
          >
            <UserList user={user} />
          </li>
        );
      })}
    </ul>
  );
}

export default UserCard;
