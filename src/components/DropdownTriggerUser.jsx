import { useState, useRef } from "react";
import arrowDown from "../assets/icons/arrow-down.svg";
import arrowUp from "../assets/icons/arrow-up.svg";
import DropdownMenu from "./DropdownMenu";

function UserDropdownTrigger({ options }) {
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
      <div
        className="flex items-center justify-center gap-4"
        onClick={handleDropdown}
      >
        <button className="text-caption1 weight-medium">{selected}</button>
        {/* arrowUp, arrowDown icon 색상 변경 필요 */}
        <img className="size-14" src={isOpen ? arrowUp : arrowDown} />
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
export default UserDropdownTrigger;
