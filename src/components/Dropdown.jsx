import { useState } from "react";
import arrowDown from "../assets/icons/arrow-down.svg";
import arrowUp from "../assets/icons/arrow-up.svg";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");
  const options = [
    { label: "최신순", value: "latest" },
    { label: "이름순", value: "name" },
  ];

  const openOption = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelected(option.label);
    setIsOpen(false);
  };

  return (
    <div className="border-grayscale-40 border-1px bg-grayscale-10 rounded-lg border px-12 py-8">
      <div className="flex items-center justify-center">
        <button className="text-grayscale-40" onClick={openOption}>
          {selected}
        </button>
        <img className="h-14 w-14" src={isOpen ? arrowUp : arrowDown} />
      </div>
      {isOpen && (
        <ul className="absolute">
          {options.map((option) => {
            return (
              <li key={option.value} onClick={() => handleOptionClick(option)}>
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
