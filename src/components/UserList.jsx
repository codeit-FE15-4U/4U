import { useNavigate } from "react-router";
import UserCard from "./UserCard";

function UserList({ users }) {
  const navigate = useNavigate();

  const handleCardClick = (user) => {
    navigate(`/post/${user.id}`);
    console.log(user);
  };

  return (
    <ul className="tablet:grid-cols-[repeat(auto-fill,_minmax(186px,1fr))] pc:grid-cols-4 grid w-full max-w-928 grid-cols-2 justify-center gap-16">
      {users.map((user) => {
        const { id, imageSource, name, questionCount } = user;

        return (
          // 카드 너비 반응형 구현 필요
          <li key={id}>
            <UserCard
              className="cursor-pointer"
              onClick={() => handleCardClick(user)}
              imageSource={imageSource}
              name={name}
              questionCount={questionCount}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default UserList;
