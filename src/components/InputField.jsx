import Person from "../assets/icons/person.svg?react";

const InputField = ({ name, setName, placeholder }) => {
  return (
    <div className="bg-grayscale-10 border-grayscale-10 flex flex-col items-center justify-center gap-16 rounded-2xl border p-16">
      <input
        type="text"
        placeholder={placeholder}
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={15}
        className="border-grayscale-40 bg-grayscale-10 focus:border-brown-40 w-full rounded-lg border-1 py-13 pr-13 pl-40 focus:outline-none"
      />
      <button className="bg-brown-40 h-46 w-257 rounded-lg text-white">
        질문 받기
      </button>
    </div>
  );
};

export default InputField;
