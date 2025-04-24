import { useEffect, useState } from "react";
import { getSubject } from "../api/subjects";

const useSubject = ({ id, subject }) => {
  const [subjectData, setSubjectData] = useState({
    name: subject?.name,
    imageSource: subject?.imageSource,
    questionCount: subject?.questionCount,
    isSubject: !!subject,
  });
  useEffect(() => {
    if (!subject) {
      const getSubjectData = async () => {
        const { name, imageSource, questionCount } = await getSubject({
          subjectId: id,
        });
        setSubjectData({
          name,
          imageSource,
          questionCount,
          isSubject: true,
        });
      };
      getSubjectData();
    }
  }, [subject, id]);
  return subjectData;
};
export default useSubject;
