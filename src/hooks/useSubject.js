import { useEffect, useState } from "react";
import { getSubject } from "../api/subjects";

const useSubject = ({ id, subject }) => {
  const [name, setName] = useState(subject?.name);
  const [imageSource, setImageSource] = useState(subject?.imageSource);
  const [questionCount, setQuestionCount] = useState(subject?.questionCount);
  const [isSubject, setIsSubject] = useState(!!subject);
  useEffect(() => {
    if (!subject) {
      const getSubjectData = async () => {
        const { name, imageSource, questionCount } = await getSubject({
          subjectId: id,
        });
        setName(name);
        setImageSource(imageSource);
        setQuestionCount(questionCount);
        setIsSubject(true);
      };
      getSubjectData();
    }
  }, [subject, id]);
  return { name, imageSource, questionCount, isSubject };
};
export default useSubject;
