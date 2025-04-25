import axios from "./axios";

export const getQuestionList = async ({ subjectId, limit = 8, offset = 0 }) => {
  const response = await axios.get(
    `subjects/${subjectId}/questions/?limit=${limit}&offset=${offset}`,
  );
  return response.data;
};

export const deleteQuestion = async ({ id }) => {
  if (!id) throw Error("Id does not exist");
  const response = await axios.delete(`questions/${id}/`);
  return response;
};
