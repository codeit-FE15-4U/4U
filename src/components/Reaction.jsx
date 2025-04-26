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
    await postReaction({ id: question.id, type: "like" });
    setLikeCounts((prev) => prev + 1);
    setReactionType("LIKE");
    localStorage.setItem(storageKey, "LIKE");
  };

  const handleDislike = async () => {
    if (reactionType) return;
    await postReaction({ id: question.id, type: "dislike" });
    setDislikeCounts((prev) => prev + 1);
    setReactionType("DISLIKE");
    localStorage.setItem(storageKey, "DISLIKE");
  };

  return (
    <ul className="text-caption1 text-grayscale-40 flex items-center justify-center gap-32">
      <li
        className={`flex items-center gap-6 ${
          reactionType === "LIKE"
            ? "cursor-default text-blue-50"
            : reactionType === "DISLIKE"
              ? "text-grayscale-40 disabled"
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
              ? "text-grayscale-40 disabled"
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
