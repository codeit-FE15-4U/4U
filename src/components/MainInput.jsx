import React from "react";

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
    </div>
  );
};

export default MainInput;
