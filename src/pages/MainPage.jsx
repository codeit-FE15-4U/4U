import MainPageButton from "../components/MainPageButton";
import MainInput from "../components/MainInput";
import Logo from "../assets/images/logo.svg";
import Maindraw from "../assets/images/main-draw.png";

const MainPage = () => {
  return (
    <div className="bg-grayscale-20 relative flex h-screen w-screen flex-col items-center justify-center gap-[24px]">
      <img src={Logo} alt="Logo" />
      <MainPageButton />
      <MainInput />
      <img
        src={Maindraw}
        alt="Main Draw"
        className="absolute bottom-0 w-[100%]"
      />
    </div>
  );
};

export default MainPage;
