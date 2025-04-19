import Button from "./Button";

function FeedCardAnswerInput({ setState, content }) {
  const handleClick = (e) => {
    e.preventDefault();
    setState("sent");
  };

  return (
    <form>
      {/* <InputTextArea /> */}
      <Button type="fill" onClick={handleClick}>
        {content ? "수정 완료" : "답변 완료"}
      </Button>
    </form>
  );
}

export default FeedCardAnswerInput;
