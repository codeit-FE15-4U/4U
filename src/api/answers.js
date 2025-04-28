import axios from "./axios";

export const postAnswer = async ({ questionId, content, isRejected }) => {
  if (!questionId) throw Error("QuestionId does not exist");
  const response = await axios.post(`questions/${questionId}/answers/`, {
    questionId,
    content,
    isRejected,
    team: "15-4",
  });
  return response.data;
};

export const patchAnswer = async ({ id, content, isRejected }) => {
  if (!id) throw Error("Id does not exist");
  const response = await axios.patch(`answers/${id}/`, {
    content,
    isRejected,
  });
  return response.data;
};
