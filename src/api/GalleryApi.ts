import axios from 'axios';
import {Image} from '../interfaces/Image';

const API_URL = 'https://jsonplaceholder.typicode.com/photos';

export const fetchImages = async (
  page: number,
  limit: number = 20,
): Promise<Image[]> => {
  const response = await axios.get(`${API_URL}?_limit=${limit}&_page=${page}`);
  return response.data;
};
