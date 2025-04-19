import { useNavigate } from "react-router";
import Button from "../components/Button";
import MainInput from "../components/MainInput";
import Logo from "../assets/images/logo.png";
import Arrow from "../assets/icons/arrow.svg?react";

const MainPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/list");
  };

  return (
    <div className="bg-grayscale-20 flex h-screen flex-col items-center justify-center gap-24 bg-[url('./assets/images/main-bg.png')] bg-[length:100%_auto] bg-bottom bg-no-repeat">
      <img src={Logo} alt="Logo" className="w-248" />

      <Button type="" onclick={handleClick}>
        질문하러 가기
        <Arrow className="text-brown-40, size-20" />
      </Button>

      <MainInput />
    </div>
  );
};

export default MainPage;
