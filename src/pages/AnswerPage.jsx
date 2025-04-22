import { useNavigate, useOutletContext } from "react-router";
import QuestionBox from "../components/QuestionBox";
import FeedCard from "../components/FeedCard";
import { deleteSubject } from "../api/subjects";

const AnswerPage = () => {
  const { questionList, questionCount, subject } = useOutletContext();
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await deleteSubject({ subjectId: subject.id });
      localStorage.removeItem("subject");
      navigate("/list");
    } catch {
      alert("삭제를 실패했습니다.");
    }
  };
  return (
    <div className="relative w-full max-w-716">
      <button
        onClick={handleDelete}
        className="bg-brown-40 text-grayscale-10 shadow-2pt pc:top-10 tablet:top-0 tablet:w-100 tablet:h-35 tablet:text-[15px] absolute top-23 right-0 w-70 cursor-pointer rounded-full text-[10px]/25 font-extralight"
      >
        삭제하기
      </button>
      <QuestionBox count={questionCount}>
        <ul className="tablet:gap-20 mt-16 flex w-full flex-col gap-16">
          {questionList.map((question) => {
            return (
              <li key={question.id} className="">
                <FeedCard
                  isAnswerPage={true}
                  subject={subject}
                  question={question}
                />
              </li>
            );
          })}
        </ul>
      </QuestionBox>
    </div>
  );
};
export default AnswerPage;
