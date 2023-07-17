import axios from "./axios";

export const postSelector = async (data) => {
  return await axios.post("/selectors", data);
};

export const getSelectors = async () => {
  const { data } = await axios.get("/selectors");

  return data;
};

export const deleteSelector = async (id) => {
  const { data } = await axios.delete(`/selectors/${id}`);

  return data;
};
