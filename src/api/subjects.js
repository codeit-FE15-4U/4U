import axios from "./axios";

export const getSubject = async ({ subjectId }) => {
  const response = await axios.get(`subjects/${subjectId}/`);
  return response.data;
};

//네임 생성
export const createSubject = async ({ name }) => {
  const response = await axios.post(`subjects/`, {
    name,
  });
  return response.data;
};

export const getSubjectList = async ({ limit = 6, offset = 0, sort }) => {
  const response = await axios.get(
    `subjects/?limit=${limit}&offset=${offset}&sort=${sort}`,
  );
  return response;
};

export const deleteSubject = async ({ subjectId }) => {
  const response = await axios.delete(`subjects/${subjectId}/`);
  return response.data;
};
