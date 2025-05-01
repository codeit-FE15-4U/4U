function DropdownMenu({ options, selected, onSelect, isOpen, className }) {
  if (!isOpen) return null;

  return (
    <ul
      className={`border-grayscale-30 bg-grayscale-10 shadow-1pt absolute right-0 z-1 cursor-pointer rounded-lg border ${className}`}
    >
      {options.map((option) => (
        <li
          key={option.value}
          className={`${selected === option.label ? "text-blue-50" : "text-grayscale-50"} hover:bg-grayscale-20 px-15 py-6 first:rounded-t-lg first:pt-10 last:rounded-b-lg last:pb-10 ${option.className}`}
          onClick={() => onSelect(option)}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
