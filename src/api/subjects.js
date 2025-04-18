import axios from "./axios";

export const getQuestionList = async ({ subjectId, limit = 8, offset = 0 }) => {
  try {
    const response = await axios.get(
      `subjects/${subjectId}/questions/?limit=${limit}&offset=${offset}`,
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserList = async ({ limit = 6, offset = 0 }) => {
  try {
    const response = await axios.get(
      `subjects/?limit=${limit}&offset=${offset}`,
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
