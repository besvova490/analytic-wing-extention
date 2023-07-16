import axios from "./axios";

export const getEvents = async () => {
  const { data } = await axios.get("/events?monthly=true");
  
  return data;
};
