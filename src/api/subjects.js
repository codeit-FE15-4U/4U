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

export const getSubject = async ({ subjectId }) => {
  try {
    const response = await axios.get(`subjects/${subjectId}/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

//네임 생성
export const createSubject = async ({ name }) => {
  try {
    const response = await axios.post(`subjects/`, {
      name,
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const getUserList = async ({ limit = 6, offset = 0, sort }) => {
  try {
    const response = await axios.get(
      `subjects/?limit=${limit}&offset=${offset}&sort=${sort}`,
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const postQuestion = async ({ subjectId, content }) => {
  try {
    const response = await axios.post(`subjects/${subjectId}/questions/`, {
      content,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postAnswer = async ({ questionId, content, isRejected }) => {
  try {
    if (!questionId) throw Error("QuestionId does not exist");
    const response = await axios.post(`questions/${questionId}/answer/`, {
      questionId,
      content,
      isRejected,
      team: "15-4",
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const patchAnswer = async ({ id, content, isRejected }) => {
  try {
    if (!id) throw Error("Id does not exist");
    const response = await axios.patch(`answers/${id}/`, {
      content,
      isRejected,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSubject = async ({ subjectId }) => {
  try {
    const response = await axios.delete(`subjects/${subjectId}/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
