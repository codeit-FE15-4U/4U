function Button({ children, type = "empty", className, onclick }) {
  // type: 버튼 모양
  // className: 별도로 지정할 class 속성
  // onclick: 버튼 클릭 시 실행할 함수

  const buttonStyles = {
    // empty: 질문하러 가기, 답변하러 가기
    // fill: 질문 받기
    // round: 질문 작성하기
    empty:
      "bg-brown-10 border-brown-40 text-brown-40 tablet:px-24 tablet:py-12 active:bg-brown-20 flex items-center gap-4 justify-center rounded-lg border px-12 py-8 hover:border-2",
    fill: "bg-brown-40 border-brown-40 text-grayscale-10 w-257 h-46 rounded-lg border tablet:w-336",
    round:
      "bg-brown-40 border-brown-40 text-grayscale-10 tablet:w-208 px-24 py-12 rounded-full border",
  };

  return (
    <button
      className={`${buttonStyles[type] ?? buttonStyles["empty"]} ${className}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}

export default Button;
