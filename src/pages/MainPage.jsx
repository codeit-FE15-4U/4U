import Button from "../components/Button";
import MainInput from "../components/MainInput";
import Logo from "../assets/images/logo.png";
import Arrow from "../assets/icons/arrow.svg?react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { createSubject } from "../api/subjects";

const MainPage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleListClick = () => {
    navigate("/list");
  };

  const handleQuestionClick = async () => {
    try {
      const response = await createSubject({ name });
      const subjectId = response.id;

      localStorage.setItem(
        "subject",
        JSON.stringify({ id: subjectId, name: response.name }),
      );
      console.log(localStorage);

      navigate(`/post/${subjectId}`, {
        state: {
          name: response.name,
          questionCount: response.questionCount,
          imageSource: response.imageSource,
        },
      });
    } catch (error) {
      console.error("이름 등록 실패:", error);
    }
  };

  return (
    <div className="bg-grayscale-20 flex h-screen flex-col items-center justify-center gap-24 bg-[url('./assets/images/main-bg.png')] bg-[length:100%_auto] bg-bottom bg-no-repeat">
      <img src={Logo} alt="Logo" className="w-248" />
      <Button type="" onClick={handleListClick}>
        질문하러 가기
        <Arrow className="text-brown-40 size-20" />
      </Button>
      <div className="bg-grayscale-10 border-grayscale-10 flex flex-col items-center justify-center gap-16 rounded-2xl p-16">
        <MainInput name={name} setName={setName} />
        <Button
          type="fill"
          disabled={name.length === 0 || name.length > 15}
          onClick={handleQuestionClick}
        >
          질문 받기
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
