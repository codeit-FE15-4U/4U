const MainInput = () => {
  return (
    <div className="bg-grayscale-10 border-grayscale-10 flex flex-col items-center justify-center gap-16 rounded-2xl border p-16">
      <input
        type="text"
        placeholder="이름을 입력하세요"
        className="border-grayscale-40 bg-grayscale-10 h-46 w-257 gap-4 rounded-lg border bg-left bg-no-repeat px-16 py-12 pl-30"
      />
      <button className="bg-brown-40 h-46 w-257 rounded-lg text-white">
        질문 받기
      </button>
    </div>
  );
};

export default MainInput;
