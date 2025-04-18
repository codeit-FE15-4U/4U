import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import MainInput from "../components/MainInput";
import Logo from "../assets/images/logo.png";
import { ArrowRightType2 } from "../components/arrow-right-type2";

const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [createSubject, setCreateSubject] = useState(null);
  const navigate = useNavigate();

  const handleListClick = () => {
    navigate("/list");
  };

  const handleInputChange = useCallback((value) => {
    setInputValue(value);
  }, []);

  const handleSubjectCreated = useCallback((createFn) => {
    setCreateSubject(() => createFn);
  }, []);

  const handleSubmit = async () => {
    if (createSubject) {
      const subjectId = await createSubject();
      if (subjectId) {
        navigate(`/subjects/${subjectId}/questions`);
      }
    }
  };

  // 버튼 활성화 여부
  const isButtonDisabled = inputValue.trim().length === 0;

  return (
    <div className="bg-grayscale-20 flex h-screen flex-col items-center justify-center gap-24 bg-[url('./assets/images/main-bg.png')] bg-[length:100%_auto] bg-bottom bg-no-repeat">
      <img src={Logo} alt="Logo" className="w-248" />
      <Button type="" onClick={handleListClick}>
        질문하러 가기
        <ArrowRightType2 className="text-brown-40" />
      </Button>
      <div className="bg-grayscale-10 border-grayscale-10 flex flex-col items-center justify-center gap-16 rounded-2xl border p-16">
        <MainInput
          onInputChange={handleInputChange}
          onSubjectCreated={handleSubjectCreated}
        />
        <Button type="fill" onClick={handleSubmit} disabled={isButtonDisabled}>
          질문 받기
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
