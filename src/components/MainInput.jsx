import React from "react";
import PersonIcon from "./person-type2";

const MainInput = ({ name, setName }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={15}
        className="border-grayscale-40 bg-grayscale-10 font-weight-regular w-full rounded-lg border py-13 pl-40"
      />
      <PersonIcon
        className="absolute top-1/2 left-16 -translate-y-1/2 transform"
        size="16"
        fill="#818181"
      />
    </div>
  );
};

export default MainInput;
