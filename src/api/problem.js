import axios from 'axios';

const ENDPOINT = 'http://localhost:3000/data';

export const getProblems = async () => {
  const res = await axios.get(`${ENDPOINT}/problems.json`);

  return res.data;
};

export const getSimialProblems = async () => {
  const res = await axios.get(`${ENDPOINT}/similars.json`);

  return res.data;
}
