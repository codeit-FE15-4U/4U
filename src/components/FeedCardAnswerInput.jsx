import { useState } from "react";
import Button from "./Button";
import InputTextarea from "./InputTextarea";

function FeedCardAnswerInput({ setState, questionId, answer }) {
  const [value, setValue] = useState(answer?.content);

  const handleClick = (e) => {
    e.preventDefault();
    setState("sent");
  };

  return (
    <form>
      <InputTextarea
        name="answer"
        placeholder="답변을 입력해주세요"
        value={value}
        setValue={setValue}
      />
      <Button type="fill" onClick={handleClick} disabled={!!value}>
        {answer ? "수정 완료" : "답변 완료"}
      </Button>
    </form>
  );
}

export default FeedCardAnswerInput;
