import axios from "./axios";

export const getQuestionList = async ({ subjectId, limit = 8, offset = 0 }) => {
  try {
    const response = await axios.get(
      `subjects/${subjectId}/questions/?limit=${limit}&offset=${offset}`,
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const deleteQuestion = async ({ id }) => {
  try {
    if (!id) throw Error("Id does not exist");
    const response = await axios.delete(`questions/${id}/`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
