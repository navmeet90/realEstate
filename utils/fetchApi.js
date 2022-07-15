import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "b424f603bdmshf5440c8e600cb7ep1974cbjsn8be4b11957ad",
    },
  });
  return data;
};
