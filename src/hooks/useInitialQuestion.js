import { useEffect, useState } from "react";
import { getQuestionList } from "../api/questions";

const useInitialQuestion = ({
  id,
  questionCount,
  setQuestionList,
  setOffset,
  setIsMoreQuestion,
}) => {
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  useEffect(() => {
    if (!questionCount) return;
    const getInitialData = async () => {
      setIsInitialLoading(true);
      const { results } = await getQuestionList({ subjectId: id });
      setQuestionList(results);
      setOffset(results.length);
      if (results.length < questionCount) {
        setIsMoreQuestion(true);
      }
      setIsInitialLoading(false);
    };
    getInitialData();
  }, [id, questionCount, setQuestionList, setOffset, setIsMoreQuestion]);
  return { isInitialLoading };
};
export default useInitialQuestion;
