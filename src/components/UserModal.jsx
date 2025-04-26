import Person from "../assets/icons/person.svg?react";
import Close from "../assets/icons/close.svg?react";

function UserModal({ onClose, subjects }) {
  const numbers = [1, 2, 3, 4, 5];
  console.log(subjects);

  return (
    <div className="tablet:px-78 fixed inset-0 flex items-center justify-center p-24">
      <div className="absolute inset-0 bg-black opacity-56" onClick={onClose} />
      <div className="bg-grayscale-10 tablet:min-h-454 tablet:max-w-612 tablet:max-h-454 tablet:p-40 shadow-3pt z-10 flex min-h-568 w-full min-w-327 flex-col gap-24 rounded-[24px] p-24">
        <div className="text-grayscale-60 text-body1 flex items-center justify-between gap-8">
          <Person className="size-28" />
          <div className="flex-1">사용자를 선택하세요</div>
          <button onClick={onClose}>
            <Close className="size-28 cursor-pointer" />
          </button>
        </div>
        <ul className="flex flex-col gap-16">
          {numbers.map((num) => {
            return (
              <li className="border-grayscale-30 bg-brown-10 hover:bg-brown-20 flex cursor-pointer rounded-lg border px-12 py-8">
                {num}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default UserModal;
