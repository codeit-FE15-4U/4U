import messages from "../assets/icons/messages.svg";

function UserCard({ imageSource, name, questionCount }) {
  return (
    <>
      <div className="flex flex-col gap-12">
        <img className="h-48 w-48 rounded-full" src={imageSource} />
        <p className="text-body2 font-regular">{name}</p>
      </div>
      <div className="text-caption1 font-regular text-grayscale-40 flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          {/* messages icon 색상 변경 필요 */}
          <img className="size-16" src={messages} />
          <span>받은 질문</span>
        </div>
        <p>{questionCount}개</p>
      </div>
    </>
  );
}

function UserList({ users }) {
  return (
    <ul className="flex flex-wrap justify-center gap-16">
      {users.map((user) => {
        const { imageSource, name, questionCount } = user;

        return (
          // 카드 너비 반응형 구현 필요
          <li
            className="tablet:h-187 border-grayscale-40 bg-grayscale-10 flex h-168 w-155 flex-col justify-between rounded-xl border p-16"
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
