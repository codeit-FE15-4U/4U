import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MainInput = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const apiUrl = "https://openmind-api.vercel.app/15-4/subjects/";

  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = 


  return (
    <div className="bg-grayscale-10 border-grayscale-10 flex flex-col items-center justify-center gap-16 rounded-2xl border p-16">
      <input
        type="text"
        value={name}
        placeholder="이름을 입력하세요"
        className="border-grayscale-40 bg-grayscale-10 h-46 w-257 gap-4 rounded-lg border bg-left bg-no-repeat px-16 py-12 pl-30"
      />
      {/* <button className="bg-brown-40 h-46 w-257 rounded-lg text-white">
        질문 받기
      </button> - 버튼 컨포넌트로 추가 할 예정*/}
    </div>
  );
};

export default MainInput;
