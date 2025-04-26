import { useState } from "react";
import Thumbsup from "../assets/icons/thumbs-up.svg?react";
import Thumbsdown from "../assets/icons/thumbs-down.svg?react";
import { postReaction } from "./../api/questions";

const Reaction = ({ question }) => {
  const [likeCounts, setLikeCounts] = useState(question.like);
  const [dislikeCounts, setDislikeCounts] = useState(question.dislike);
  const [isLike, setIsLike] = useState("");
  const [isDislike, setIsDislike] = useState("");

  const handleLike = async () => {
    postReaction({ id: question.id, type: "like" });
    setLikeCounts((prev) => prev + 1);
  };

  const handleDislike = async () => {
    postReaction({ id: question.id, type: "dislike" });
    setDislikeCounts((prev) => prev + 1);
  };

  return (
    <ul className="text-caption1 text-grayscale-40 flex items-center justify-center gap-32">
      <li
        className={"flex cursor-pointer items-center gap-6"}
        onClick={handleLike}
      >
        <Thumbsup className="size-16" />
        좋아요 {likeCounts}
      </li>
      <li
        className={"flex cursor-pointer items-center gap-6"}
        onClick={handleDislike}
      >
        <Thumbsdown className="size-16" />
        싫어요 {dislikeCounts}
      </li>
    </ul>
  );
};

export default Reaction;

// 1. 좋아요를 누르면 +1 싫어요는 +0
// 2. 싫어요를 누르면 +1 좋아요는 +0
// 3. 좋아요를 누르면 싫어요 누르지 못함
// 4. 좋아요를 누르기전에 기존 좋아요의 갯수를 가져와하고 (피드카드의 퀘스천.like) 표시
// 5. 좋아요를 눌렀을때 postRea
// 6. 리액션수가 0일때는 갯수가 안보이게.
// 7. 좋아요수는 서버, 로컬은 유저의 좋아요를 누른걸 검증하기위해 퀘스천아이디를 로컬에 저장하면, 좋아요에서 퀘슽천아이디를 비교해서 있따면, 이미 누른걸로 그럼 누르지못하게 -
//    좋아요싫어요정보도 저장해서 이미 누르면 파란색으로 로컬로 확인해서 할수있다.
