import logo from "../assets/images/logo.svg";
import profile from "../assets/images/profile.svg";

function ListPage() {
  return (
    <>
      <img src={logo}></img>
      <button>답변하러 가기</button> {/* <Button /> */}
      <div>
        <p>누구에게 질문할까요?</p>
        <p>이름순</p> {/* <Dropdown /> */}
      </div>
      <div>
        <img></img>
        <p>이름</p>
        <div>
          {/* <UserCard /> */}
          <img src={profile}></img>
          <div>이름</div>
          <span>받은 질문</span>
          <span>9개</span>
        </div>
      </div>
      <div>1 2 3 4 5</div> {/*<Pagenation />*/}
    </>
  );
}

export default ListPage;
