import { useState } from "react";
import { useNavigate } from "react-router";
import { deleteSubject } from "../../api/subjects";
import Button from "../Button";
import DeleteModal from "./DeleteModal";

const DeleteButton = ({ id }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await deleteSubject({ subjectId: id });
      const subjects = JSON.parse(localStorage.getItem("subjects") || "[]");
      const updatedSubjects = subjects.filter(
        (subject) => String(subject.id) !== String(id),
      );
      localStorage.setItem("subjects", JSON.stringify(updatedSubjects));
      navigate("/list");
    } catch {
      alert("삭제를 실패했습니다.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Button
        disabled={isDeleting}
        type="round"
        onClick={() => setIsModalOpen(true)}
        className="pc:top-10 tablet:top-0 tablet:w-100 tablet:h-35 tablet:text-[15px] absolute top-23 right-0 w-70 text-[10px]/25 font-extralight"
      >
        {isDeleting ? "삭제중" : "삭제하기"}
      </Button>
      {isModalOpen && (
        <DeleteModal
          onCancel={() => setIsModalOpen(false)}
          onConfirm={() => {
            setIsModalOpen(false);
            handleDelete();
          }}
        />
      )}
    </>
  );
};
export default DeleteButton;
