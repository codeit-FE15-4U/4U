function DropdownMenu({ options, selected, onSelect, isOpen }) {
  if (!isOpen) return null;

  return (
    <ul className="border-grayscale-30 bg-grayscale-10 shadow-1pt absolute top-40 right-0 w-79 rounded-lg border">
      {options.map((option) => (
        <li
          key={option.value}
          className={`${selected === option.label ? "text-blue-50" : "text-grayscale-50"} hover:bg-grayscale-20 px-16 py-6`}
          onClick={() => onSelect(option)}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
