import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/',
});
