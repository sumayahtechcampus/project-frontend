import apiUrl from '../apiConfig';
import axios from 'axios';

// Get All Childrens
export const getAllChildrens = function(user) {
  return axios({
    url: `${apiUrl}/childrens`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
    },
  });
}
