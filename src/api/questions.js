import axios from "./axios";

export const getQuestionList = async ({ subjectId, limit = 8, offset = 0 }) => {
  const response = await axios.get(
    `subjects/${subjectId}/questions/?limit=${limit}&offset=${offset}`,
  );
  return response.data;
};

export const postQuestion = async ({ subjectId, content }) => {
  try {
    const response = await axios.post(`subjects/${subjectId}/questions/`, {
      content,
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
