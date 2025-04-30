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
  const isCount = !!questionCount;
  useEffect(() => {
    if (!isCount) return;
    const getInitialData = async () => {
      setIsInitialLoading(true);
      const { results, count } = await getQuestionList({ subjectId: id });
      setQuestionList(results);
      setOffset(results.length);
      if (results.length < count) {
        setIsMoreQuestion(true);
      }
      setIsInitialLoading(false);
    };
    getInitialData();
  }, [id, isCount, setQuestionList, setOffset, setIsMoreQuestion]);
  return { isInitialLoading };
};
export default useInitialQuestion;
