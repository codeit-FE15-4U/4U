import { useRef, useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");
  const dropdownRef = useRef(null);
  const options = [
    { label: "최신순", value: "latest" },
    { label: "이름순", value: "name" },
  ];

  const toggleDown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelected(option.label);
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <div className="border-grayscale-40 border">
      <button onClick={toggleDown}>{selected}</button>
      {isOpen && (
        <ul>
          {options.map((option) => {
            return <li>{option.label}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
export default Dropdown;
