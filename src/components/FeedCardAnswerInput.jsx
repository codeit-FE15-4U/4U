import { useState } from "react";
import Button from "./Button";
import InputTextarea from "./InputTextarea";
import { patchAnswer, postAnswer } from "../api/subjects";

function FeedCardAnswerInput({ setState, questionId, answer }) {
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

export default FeedCardAnswerInput;
