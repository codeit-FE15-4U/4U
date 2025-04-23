import { useState } from "react";
import Button from "./Button";
import InputTextarea from "./InputTextarea";
import { patchAnswer, postAnswer } from "../api/subjects";

function FeedCardAnswerInput({
  state,
  setState,
  questionId,
  answer,
  setAnswer,
}) {
  const [value, setValue] = useState(answer?.content);
  const [disabled, setDisabled] = useState(!answer);

  const handleClick = async (e) => {
    e.preventDefault();
    setDisabled(true);
    if (answer) {
      setAnswer(await patchAnswer({ ...answer, content: value }));
    } else {
      setAnswer(
        await postAnswer({ questionId, content: value, isRejected: false }),
      );
    }
    setState("sent");
  };

  const handleChange = (e) => {
    setDisabled(e.target.value ? false : true);
  };

  switch (state) {
    case "sent":
      return <div className="text-body3">{value}</div>;
    case "rejected":
      return <div className="text-body3 text-red-50">답변 거절</div>;
    case "empty":
      return (
        <form onChange={handleChange}>
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
            disabled={disabled}
          >
            {answer ? "수정 완료" : "답변 완료"}
          </Button>
        </form>
      );
  }
}

export default FeedCardAnswerInput;
