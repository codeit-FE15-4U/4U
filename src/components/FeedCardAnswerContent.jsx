import { useState } from "react";
import Button from "./Button";
import InputTextarea from "./InputTextarea";
import { patchAnswer, postAnswer } from "../api/subjects";

function FeedCardAnswerInput({ state, setState, questionId, answer }) {
  const [value, setValue] = useState(answer?.content);

  const handleClick = (e) => {
    e.preventDefault();
    if (answer) {
      patchAnswer({ ...answer, content: value });
    } else {
      postAnswer({ questionId, content: value, isRejected: false });
    }
    setState("sent");
  };

  switch (state) {
    case "sent":
      return <div className="text-body3">{value}</div>;
    case "rejected":
      return <div className="text-body3 text-red-50">답변 거절</div>;
    case "empty":
      return (
        <form>
          <InputTextarea
            name="answer"
            className="h-186 w-full"
            placeholder="답변을 입력해주세요"
            value={value}
            setValue={setValue}
          />
          <Button
            className="w-full"
            type="fill"
            onClick={handleClick}
            disabled={!value}
          >
            {answer ? "수정 완료" : "답변 완료"}
          </Button>
        </form>
      );
  }
}

export default FeedCardAnswerInput;
