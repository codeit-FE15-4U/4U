import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <ul className="flex flex-wrap justify-center gap-16">
      {users.map((user) => {
        const { imageSource, name, questionCount } = user;

        return (
          // 카드 너비 반응형 구현 필요
          <li
            className="flex flex-col justify-between p-16 border tablet:h-187 border-grayscale-40 bg-grayscale-10 h-168 w-155 rounded-xl"
            key={user.id}
          >
            <UserCard
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
