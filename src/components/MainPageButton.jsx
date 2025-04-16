import ArrowRight from "../assets/icons/arrow-right.svg";

const MainPageButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-brown-40 bg-brown-10 text-caption1 font-regular flex items-center justify-center gap-[4px] rounded-lg border px-[12px] py-[8px]"
    >
      질문하러 가기
      <img src={ArrowRight} alt="Arrow Right" className="h-[18px] w-[18px]" />
    </button>
  );
};

export default MainPageButton;
