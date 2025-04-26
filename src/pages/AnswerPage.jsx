import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteSubject } from "../api/subjects";
import { getQuestionList } from "../api/questions";
import QuestionBox from "../components/QuestionBox";
import Button from "../components/Button";
import QuestionContainer from "../components/QuestionContainer";
import QuestionList from "./../components/QuestionList";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useSubject from "../hooks/useSubject";
import useInitialQuestion from "../hooks/useInitialQuestion";

const AnswerPage = () => {
  const [questionList, setQuestionList] = useState([]);
  const { id } = useParams();
  const [offset, setOffset] = useState(0);
  const [isMoreQuestion, setIsMoreQuestion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const { subject, questionCount } = useSubject(id);

  const { isInitialLoading } = useInitialQuestion({
    id,
    questionCount,
    setQuestionList,
    setOffset,
    setIsMoreQuestion,
  });

  const getMoreData = useCallback(async () => {
    if (isInitialLoading || isLoading) return;
    setIsLoading(true);
    const { results } = await getQuestionList({ subjectId: id, offset });
    setQuestionList((prev) => [...prev, ...results]);
    setOffset((prev) => prev + results.length);
    if (offset + results.length >= questionCount) {
      setIsMoreQuestion(false);
    }
    setIsLoading(false);
  }, [id, offset, questionCount, isLoading, isInitialLoading]);

  const { ref } = useInfiniteScroll({ callback: getMoreData, isMoreQuestion });

  const handleDelete = async () => {
    const subjects = JSON.parse(localStorage.getItem("subjects") || "[]");
    const updatedSubjects = subjects.filter(
      (subject) => String(subject.id) !== String(id),
    );
    localStorage.setItem("subjects", JSON.stringify(updatedSubjects));
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await deleteSubject({ subjectId: id });
      localStorage.removeItem("subject");
      navigate("/list");
    } catch {
      alert("삭제를 실패했습니다.");
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <QuestionContainer subject={subject}>
      <div className="relative w-full max-w-716">
        <Button
          disabled={isDeleting}
          type="round"
          onClick={handleDelete}
          className="pc:top-10 tablet:top-0 tablet:w-100 tablet:h-35 tablet:text-[15px] absolute top-23 right-0 w-70 text-[10px]/25 font-extralight"
        >
          {isDeleting ? "삭제중" : "삭제하기"}
        </Button>
        <QuestionBox count={questionCount}>
          <QuestionList
            isInitialLoading={isInitialLoading}
            isLoading={isLoading}
            questionList={questionList}
            subject={subject}
            isAnswerPage={true}
          />
          <div ref={ref}></div>
        </QuestionBox>
      </div>
    </QuestionContainer>
  );
};
export default AnswerPage;
