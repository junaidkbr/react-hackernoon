import axios from 'axios';

export const getPost = () => axios.get(`/data.json`);

export const getGist = (gistId = '') =>
  axios.get(`https://gist.github.com/${gistId}.json`);
