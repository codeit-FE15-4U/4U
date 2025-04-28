import { useMemo } from "react";
import { deleteQuestion } from "../../api/questions";
import DropdownTrigger from "../dropdown/DropdownTrigger";
import IconEdit from "../../assets/icons/edit.svg?react";
import IconRejection from "../../assets/icons/rejection.svg?react";
import IconClose from "../../assets/icons/close.svg?react";

function FeedCardDropdown({ setState, question, setIsQuestion }) {
  const dropdownOptions = useMemo(
    () => [
      {
        label: (
          <div className="flex items-center gap-8">
            <IconEdit className="size-14" />
            수정하기
          </div>
        ),
        className:
          "text-grayscale-50 hover:text-grayscale-60 active:text-blue-50",
        value: "edit",
        click() {
          setState("empty");
        },
      },
      {
        label: (
          <div className="flex items-center gap-8">
            <IconRejection className="size-14" />
            거절하기
          </div>
        ),
        className:
          "text-grayscale-50 hover:text-grayscale-60 active:text-blue-50",
        value: "reject",
        click: async () => {
          setState("rejected");
        },
      },
      {
        label: (
          <div className="flex items-center gap-8">
            <IconClose className="size-14" />
            삭제하기
          </div>
        ),
        className:
          "text-grayscale-50 hover:text-grayscale-60 active:text-blue-50",
        value: "delete",
        click: async () => {
          await deleteQuestion({ id: question.id });
          setIsQuestion(false);
        },
      },
    ],
    [question],
  );

  return (
    <DropdownTrigger
      type="answer"
      options={dropdownOptions}
      className="top-28 w-103"
    />
  );
}

export default FeedCardDropdown;
