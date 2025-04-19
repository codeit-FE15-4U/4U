function Button({ children, type = "empty", className, onclick, disabled }) {
  // type: 버튼 모양
  // className: 별도로 지정할 class 속성
  // onclick: 버튼 클릭 시 실행할 함수
  // disabled: 버튼 비활성화

  const buttonStyles = {
    // empty: 질문하러 가기, 답변하러 가기
    // fill: 질문 받기
    // round: 질문 작성하기
    empty:
      "bg-brown-10 border-brown-40 text-brown-40 tablet:px-24 tablet:py-12 active:bg-brown-20 flex items-center gap-4 justify-center rounded-lg border px-12 py-8 hover:border-2 hover:py-7 hover:px-11 hover:tablet:py-11 hover:tablet:px-23 cursor-pointer disabled:border-brown-30 disabled:bg-brown-10 disabled:text-brown-30",
    fill: "bg-brown-40 text-grayscale-10 w-257 h-46 tablet:px-24 tablet:py-12 active:bg-brown-50 flex items-center gap-4 justify-center rounded-lg hover:border-2 hover:border-brown-50 hover:px-11 hover:py-7 hover:border-2 hover:tablet:py-11 hover:tablet:px-23 active:border-none cursor-pointer",
    round:
      "bg-brown-40 text-grayscale-10 tablet:w-208 px-24 py-12 rounded-full cursor-pointer shadow-1pt",
  };

  return (
    <button
      className={`${buttonStyles[type] ?? buttonStyles["empty"]} ${className}`}
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
