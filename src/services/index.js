import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const fetchUserInfo = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}`);
    return response.data.data.userInfos;
  } catch (error) {
    console.log('error occurred while fetching User info', error);
  }
};

const fetchActivity = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}/activity`);
    return response.data.data.sessions;
  } catch (error) {
    console.log('error occurred while fetching User activities', error);
  }
}

const fetchSessionsLength = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}/average-sessions`);
    return response.data.data.sessions;
  } catch (error) {
    console.log('error occurred while fetching User sessions length', error);
  }
}

const fetchScore = async (userId) => {
  try {
    const userInfo = await fetchUserInfo(userId);
    return userInfo.score || userInfo.todayScore;
  } catch (error) {
    console.log('error occurred while fetching Score', error);
  }
};

export {
  fetchUserInfo,
  fetchActivity,
  fetchSessionsLength,
  fetchScore,
};
