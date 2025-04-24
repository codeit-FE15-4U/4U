import { useRef, useState } from "react";
import Button from "./Button";
import InputTextarea from "./InputTextarea";
import { patchAnswer, postAnswer } from "../api/answers";

function FeedCardAnswerInput({
  state,
  setState,
  questionId,
  answer,
  setAnswer,
}) {
  const content = useRef();
  const [disabled, setDisabled] = useState(!answer);

  const handleClick = async (e) => {
    e.preventDefault();
    setDisabled(true);
    if (answer) {
      setAnswer(
        await patchAnswer({ ...answer, content: content.current.value }),
      );
    } else {
      setAnswer(
        await postAnswer({
          questionId,
          content: content.current.value,
          isRejected: false,
        }),
      );
    }
    setState("sent");
  };

  const handleChange = () => {
    setDisabled(content.current.value ? false : true);
  };

  switch (state) {
    case "sent":
      return <div className="text-body3">{answer?.content}</div>;
    case "rejected":
      return <div className="text-body3 text-red-50">답변 거절</div>;
    case "empty":
      return (
        <form onChange={handleChange}>
          <InputTextarea
            name="answer"
            className="h-186 w-full"
            placeholder="답변을 입력해주세요"
            defaultValue={answer?.content}
            ref={content}
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
