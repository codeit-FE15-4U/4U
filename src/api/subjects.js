import axios from "./axios";

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

export const getSubjectList = async ({ limit = 6, offset = 0, sort }) => {
  try {
    const response = await axios.get(
      `subjects/?limit=${limit}&offset=${offset}&sort=${sort}`,
    );
    return response;
  } catch (error) {
    console.log(error.message);
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
