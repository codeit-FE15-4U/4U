function Button({
  children,
  type = "empty", // type: 버튼 모양
  className = "", // className: 별도로 지정할 class 속성
  onClick, // onclick: 버튼 클릭 시 실행할 함수
  disabled, // disabled: 버튼 비활성화
}) {
  const buttonStyles = {
    // empty: 질문하러 가기, 답변하러 가기
    // fill: 질문 받기
    // round: 질문 작성하기
    empty: {
      baseStyle:
        "bg-brown-10 border-brown-40 text-brown-40 tablet:px-24 tablet:py-12 flex items-center gap-4 justify-center rounded-lg border px-12 py-8 cursor-pointer",
      hoverStyle:
        "hover:border-2 hover:py-7 hover:px-11 hover:tablet:py-11 hover:tablet:px-23 active:bg-brown-20",
      disabledStyle:
        "disabled:bg-brown-10 disabled:border-brown-30 disabled:text-brown-30 disabled:border disabled:px-12 disabled:py-8 disabled:tablet:px-24 disabled:tablet:py-12 disabled:cursor-not-allowed",
    },
    fill: {
      baseStyle:
        "bg-brown-40 text-grayscale-10 w-257 h-46 tablet:px-24 tablet:py-12 flex items-center gap-4 justify-center rounded-lg cursor-pointer",
      hoverStyle:
        "hover:border-2 hover:border-brown-50 hover:px-11 hover:py-7 hover:border-2 hover:tablet:py-11 hover:tablet:px-23 active:border-none active:bg-brown-50",
      disabledStyle:
        "disabled:bg-brown-30 disabled:border-none disabled:text-grayscale-10 disbled:px-12 disabled:py-8 disabled:tablet:px-24 disabled:tablet:12 disabled:cursor-not-allowed",
    },
    round: {
      baseStyle:
        "bg-brown-40 text-grayscale-10 tablet:w-208 px-24 py-12 rounded-full shadow-1pt cursor-pointer",
      hoverStyle: "",
      disabledStyle: "",
    },
  };

  const { baseStyle, hoverStyle, disabledStyle } =
    buttonStyles[type] ?? buttonStyles["empty"];

  return (
    <button
      className={`${baseStyle} ${hoverStyle} ${disabledStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
