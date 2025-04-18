import Button from "../components/Button";
import MainInput from "../components/MainInput";
import ArrowIcon from "../components/arrow-right-type2";
import Logo from "../assets/images/logo.png";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

const MainPage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleListClick = () => {
    navigate("/list");
  };
  const baseApi = "https://openmind-api.vercel.app/15-4/subjects/";

  const handleQuestionClick = async () => {
    if (name.length === 0 || name.length > 15) return;
    try {
      const response = await axios.post(baseApi, {
        name: name,
        team: "15-4",
      });
      const subjectId = response.data.id;
      navigate(`/question/${subjectId}`);
    } catch (error) {
      console.error("API 요청 실패:", error);
      alert("이름은 1~15자 이내로 작성해주세요.");
    }
  };

  console.log(name); //확인용
  return (
    <div className="bg-grayscale-20 flex h-screen flex-col items-center justify-center gap-24 bg-[url('./assets/images/main-bg.png')] bg-[length:100%_auto] bg-bottom bg-no-repeat">
      <img src={Logo} alt="Logo" className="w-248" />
      <Button type="" onClick={handleListClick}>
        질문하러 가기
        <ArrowIcon fill="#542F1A" />
      </Button>
      <div className="bg-grayscale-10 border-grayscale-10 flex flex-col items-center justify-center gap-16 rounded-2xl border p-16">
        <MainInput name={name} setName={setName} />
        <Button
          type="fill"
          disabled={name.length === 0}
          onClick={handleQuestionClick}
        >
          질문 받기
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
