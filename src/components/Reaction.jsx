import { useState, useEffect } from "react";
import { postReaction } from "./../api/questions";
import Thumbsup from "../assets/icons/thumbs-up.svg?react";
import Thumbsdown from "../assets/icons/thumbs-down.svg?react";

const Reaction = ({ question }) => {
  const [likeCounts, setLikeCounts] = useState(question.like);
  const [dislikeCounts, setDislikeCounts] = useState(question.dislike);
  const [reactionType, setReactionType] = useState("");

  const storageKey = `reaction_${question.id}`;

  useEffect(() => {
    const storedReaction = localStorage.getItem(storageKey);
    if (storedReaction) {
      setReactionType(storedReaction);
    }
  }, [storageKey]);

  const handleLike = async () => {
    if (reactionType) return;
    setReactionType("LIKE");
    setLikeCounts((prev) => prev + 1);
    try {
      await postReaction({ id: question.id, type: "like" });
      localStorage.setItem(storageKey, "LIKE");
    } catch (error) {
      console.error("좋아요 요청 실패:", error);
      setReactionType("");
      setLikeCounts((prev) => prev - 1);
    }
  };

  const handleDislike = async () => {
    if (reactionType) return;
    setReactionType("DISLIKE");
    setDislikeCounts((prev) => prev + 1);

    try {
      await postReaction({ id: question.id, type: "dislike" });
      localStorage.setItem(storageKey, "DISLIKE");
    } catch (error) {
      console.error("싫어요 요청 실패:", error);
      setReactionType("");
      setDislikeCounts((prev) => prev - 1);
    }
  };

  return (
    <ul className="text-caption1 text-grayscale-40 flex items-center justify-center gap-32">
      <li
        className={`flex items-center gap-6 ${
          reactionType === "LIKE"
            ? "cursor-default text-blue-50"
            : reactionType === "DISLIKE"
              ? "text-grayscale-40 cursor-default"
              : "text-grayscale-40 cursor-pointer"
        }`}
        onClick={handleLike}
      >
        <Thumbsup className="size-16" />
        좋아요 {likeCounts > 0 ? likeCounts : ""}
      </li>
      <li
        className={`flex items-center gap-6 ${
          reactionType === "DISLIKE"
            ? "text-grayscale-60 cursor-default"
            : reactionType === "LIKE"
              ? "text-grayscale-40 cursor-default"
              : "text-grayscale-40 cursor-pointer"
        }`}
        onClick={handleDislike}
      >
        <Thumbsdown className="size-16" />
        싫어요 {dislikeCounts > 0 ? dislikeCounts : ""}
      </li>
    </ul>
  );
};

export default Reaction;
