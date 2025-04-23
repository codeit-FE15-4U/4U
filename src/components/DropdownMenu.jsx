function DropdownMenu({ options, selected, onSelect, isOpen }) {
  if (!isOpen) return null;

  return (
    <ul className="border-grayscale-30 bg-grayscale-10 shadow-1pt absolute right-0 -bottom-68 w-79 rounded-lg border">
      {options.map((option) => (
        <li
          key={option.value}
          className={`${selected === option.label ? "text-blue-50" : "text-grayscale-50"} hover:bg-grayscale-20 rounded-lg px-16 py-6`}
          onClick={() => onSelect(option)}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
