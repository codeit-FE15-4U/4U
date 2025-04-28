import { useEffect, useState } from "react";
import { getSubject } from "../api/subjects";
import { useNavigate } from "react-router";

const useSubject = (id) => {
  const [subject, setSubject] = useState({
    name: "",
    imageSource: "",
    isSubject: false,
  });
  const [questionCount, setQuestionCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const getSubjectData = async () => {
      try {
        const { name, imageSource, questionCount } = await getSubject({
          subjectId: id,
        });
        setSubject({
          name,
          imageSource,
          isSubject: true,
        });
        setQuestionCount(questionCount);
      } catch (error) {
        if (error.status === 404) {
          navigate("/NotFoundPage");
        }
      }
    };
    getSubjectData();
  }, [id, navigate]);
  return { subject, questionCount, setQuestionCount };
};
export default useSubject;
