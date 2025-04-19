import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <ul className="grid justify-center grid-cols-2 gap-16 tablet:grid-cols-3 pc:grid-cols-4">
      {users.map((user) => {
        const { imageSource, name, questionCount } = user;

        return (
          // 카드 너비 반응형 구현 필요
          <li key={user.id}>
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
