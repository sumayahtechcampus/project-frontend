import apiUrl from '../apiConfig';
import axios from 'axios';

// Get All Childrens
export const getAllChildrens = function() {
  return axios.get(`${apiUrl}/childrens`);
}
