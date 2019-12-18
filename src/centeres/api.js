import apiUrl from '../apiConfig';
import axios from 'axios';

// Get All Centeres
export const getAllCenteres = function() {
  return axios.get(`${apiUrl}/centers`);

  
}
export const getAllChildrens = function(user) {
  return axios({
    url: `${apiUrl}/childrens`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
    },
  });
}