import apiUrl from '../apiConfig';
import axios from 'axios';

// Get All Centeres
export const getAllCenteres = function() {
  return axios.get(`${apiUrl}/centers`);
}
