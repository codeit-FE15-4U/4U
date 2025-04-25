import { useEffect, useState } from "react";
import { getSubject } from "../api/subjects";

const useSubject = ({ id, subject }) => {
  const [subjectData, setSubjectData] = useState({
    name: subject?.name,
    imageSource: subject?.imageSource,
    isSubject: !!subject,
  });
  const [questionCount, setQuestionCount] = useState(subject?.questionCount);
  useEffect(() => {
    if (!subject) {
      const getSubjectData = async () => {
        const { name, imageSource, questionCount } = await getSubject({
          subjectId: id,
        });
        setSubjectData({
          name,
          imageSource,
          isSubject: true,
        });
        setQuestionCount(questionCount);
      };
      getSubjectData();
    }
  }, [subject, id]);
  return { subjectData, questionCount, setQuestionCount };
};
export default useSubject;
