import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const fetchUserInfo = async (id) => {
   try {
    const response = await axios.get(`${BASE_URL}/user/${id}`);
    return response.data.data.userInfos;
  } catch (error) {
    console.log('error occurred while fetching User info ', error);
  }
};

export {
  fetchUserInfo,
};
