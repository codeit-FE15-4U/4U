import arrowRight from "../assets/icons/arrow-right.svg";
function Button({ content, type = "default", onclick }) {
  // content: 버튼 안에 입력할 문구
  // onclick: 버튼 클릭 시 실행할 함수
  // type: 버튼 모양

  function getButtonStyle() {
    // empty: 질문하러 가기, 답변하러 가기
    // fill: 질문 받기
    // round: 질문 작성하기
    switch (type) {
      case "empty":
        return "bg-brown-10 border-brown-40 text-brown-40 tablet:px-24 tablet:py-12 active:bg-brown-20 flex items-center gap-4 justify-center rounded-lg border px-12 py-8 hover:border-2";
      case "fill":
        return "bg-brown-40 border-brown-40 text-grayscale-10 w-257 h-46 rounded-lg border tablet:w-336";
      case "round":
        return "bg-brown-40 border-brown-40 text-grayscale-10 tablet:w-208 px-24 py-12 rounded-full border";
    }
  }

  return (
    <button className={getButtonStyle()} onClick={onclick}>
      {content}
      {type === "empty" && <img src={arrowRight} />}
    </button>
  );
}

export default Button;
