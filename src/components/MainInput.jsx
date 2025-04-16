const MainInput = () => {
  return (
    <div className="bg-grayscale-10 border-grayscale-10 flex flex-col items-center justify-center gap-[16px] rounded-2xl border p-[16px]">
      <input
        type="text"
        placeholder="이름을 입력하세요"
        className="border-grayscale-40 bg-grayscale-10 h-[46px] w-[257px] gap-[4px] rounded-lg border bg-left bg-no-repeat px-[16px] py-[12px] pl-[30px]"
      />
      <button className="bg-brown-40 h-[46px] w-[257px] rounded-lg text-white">
        질문 받기
      </button>
    </div>
  );
};

export default MainInput;
