import { useState, useRef } from "react";
import ArrowDown from "../assets/icons/arrow-down.svg?react";
import ArrowUp from "../assets/icons/arrow-up.svg?react";
import More from "../assets/icons/more.svg?react";
import DropdownMenu from "./DropdownMenu";

function DropdownTrigger({ options, type, className }) {
  // options: label, value 값을 가진 객체로 받아오기
  // const options = [
  //   { label: "최신순", value: "latest", click:"" },
  //   { label: "이름순", value: "name", click:"" },
  // ];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].label);
  const dropdownRef = useRef();
  const triggerType = () => {
    if (type === "user") {
      return (
        <>
          <button className="cursor-pointer">{selected}</button>
          {isOpen ? (
            <ArrowUp
              className={`${isOpen ? "border-black text-black" : "border-grayscale-40 text-grayscale-40"} size-14`}
            />
          ) : (
            <ArrowDown
              className={`${isOpen ? "border-black text-black" : "border-grayscale-40 text-grayscale-40"} size-14`}
            />
          )}
        </>
      );
    } else if (type === "answer") {
      return <More className="size-26" />;
    } else {
      return null;
    }
  };
  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelected(option.label);
    setIsOpen(false);
    option.click();
  };
  const handleBlur = (e) => {
    if (!dropdownRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      tabIndex={-1}
      onBlur={handleBlur}
      className={
        type === "user"
          ? `${isOpen ? "border-black text-black" : "border-grayscale-40 text-grayscale-40"} bg-grayscale-10 text-caption1 relative cursor-pointer rounded-lg border px-12 py-8 font-medium`
          : "text-caption1 relative cursor-pointer font-medium"
      }
      ref={dropdownRef}
    >
      <div
        className="flex items-center justify-center gap-4"
        onClick={handleDropdown}
      >
        {triggerType()}
      </div>
      {isOpen && (
        <DropdownMenu
          options={options}
          selected={selected}
          onSelect={handleOptionClick}
          isOpen={isOpen}
          className={className}
        />
      )}
    </div>
  );
}
export default DropdownTrigger;
