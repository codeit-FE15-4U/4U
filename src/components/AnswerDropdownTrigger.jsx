import { useState, useRef } from "react";
import DropdownMenu from "./DropdownMenu";
import more from "../assets/icons/more.svg";

function AnswerDropdownTrigger({ options }) {
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
      className="relative"
      ref={dropdownRef}
    >
      <div className="flex items-center justify-center gap-4">
        <button
          className="text-caption1 weight-medium"
          onClick={handleDropdown}
        >
          <img src={more} />
        </button>
      </div>
      {isOpen && (
        <DropdownMenu
          options={options}
          selected={selected}
          onSelect={handleOptionClick}
          isOpen={isOpen}
        />
      )}
    </div>
  );
}
export default AnswerDropdownTrigger;
