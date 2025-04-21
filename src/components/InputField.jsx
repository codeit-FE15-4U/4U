import Person from "../assets/icons/person.svg?react";

const InputField = ({ name, setName, placeholder }) => {
  return (
    <div className="relative">
      <Person className="text-grayscale-40 absolute top-1/2 left-16 size-20 -translate-y-1/2" />
      <input
        type="text"
        placeholder={placeholder}
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={15}
        className="border-grayscale-40 bg-grayscale-10 focus:border-brown-40 w-full rounded-lg border-1 py-13 pr-13 pl-40 focus:outline-none"
      />
    </div>
  );
};

export default InputField;
