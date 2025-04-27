function DropdownMenu({ options, selected, onSelect, isOpen, type }) {
  if (!isOpen) return null;

  return (
    <ul
      className={`${type === "user" ? "top-40 w-79" : "top-28 w-103"} border-grayscale-30 bg-grayscale-10 shadow-1pt absolute right-0 cursor-pointer rounded-lg border`}
    >
      {options.map((option) => (
        <li
          key={option.value}
          className={`${selected === option.label ? "text-blue-50" : "text-grayscale-50"} hover:bg-grayscale-20 px-15 py-6 first:rounded-t-lg first:pt-10 last:rounded-b-lg last:pb-10`}
          onClick={() => onSelect(option)}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
