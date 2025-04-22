import { useState, useRef } from "react";
import arrowDown from "../assets/icons/arrow-down.svg";
import arrowUp from "../assets/icons/arrow-up.svg";

function Dropdown({ options }) {
  // options: label, value 값을 가진 객체로 받아오기
  // const options = [
  //   { label: "최신순", value: "latest" },
  //   { label: "이름순", value: "name" },
  // ];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");
  const dropdownRef = useRef();

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelected(option.label);
    setIsOpen(false);
  };
  const handleOutsideClick = (e) => {
    if (!dropdownRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      tabIndex={-1}
      onBlur={handleOutsideClick}
      className={`${isOpen ? "border-black text-black" : "border-grayscale-40 text-grayscale-40"} bg-grayscale-10 text-caption1 weight-medium relative rounded-lg border px-12 py-8`}
      ref={dropdownRef}
    >
      <div className="flex items-center justify-center gap-4">
        <button
          className="text-caption1 weight-medium"
          onClick={handleDropdown}
        >
          {selected}
        </button>
        {/* arrowUp, arrowDown icon 색상 변경 필요 */}
        <img className="size-14" src={isOpen ? arrowUp : arrowDown} />
      </div>
      {isOpen && (
        <ul className="border-grayscale-30 bg-grayscale-10 shadow-1pt absolute top-40 right-0 w-79 rounded-lg border">
          {options.map((option) => {
            return (
              <li
                className={`${selected === option.label ? "text-blue-50" : "text-grayscale-50"} hover:bg-grayscale-20 px-16 py-6`}
                key={option.value}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default Dropdown;
