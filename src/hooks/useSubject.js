import { useEffect, useState } from "react";
import { getSubject } from "../api/subjects";

const useSubject = (id) => {
  const [subject, setSubject] = useState({
    name: "",
    imageSource: "",
    isSubject: false,
  });
  const [questionCount, setQuestionCount] = useState(0);
  useEffect(() => {
    const getSubjectData = async () => {
      const { name, imageSource, questionCount } = await getSubject({
        subjectId: id,
      });
      setSubject({
        name,
        imageSource,
        isSubject: true,
      });
      setQuestionCount(questionCount);
    };
    getSubjectData();
  }, [id]);
  return { subject, questionCount, setQuestionCount };
};
export default useSubject;
