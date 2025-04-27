import { useRef, useState } from "react";
import Button from "./Button";
import InputTextarea from "./InputTextarea";
import { patchAnswer, postAnswer } from "../api/answers";

function FeedCardAnswerInput({ setState, questionId, answer, setAnswer }) {
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
    setDisabled(false);
  };

  const handleChange = () => {
    setDisabled(content.current.value ? false : true);
  };

  return (
    <form>
      <InputTextarea
        name="answer"
        className="h-186 w-full"
        placeholder="답변을 입력해주세요"
        defaultValue={answer?.content}
        ref={content}
        onChange={handleChange}
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

export default FeedCardAnswerInput;
