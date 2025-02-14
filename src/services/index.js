import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}`);
    return response.data.data;
  } catch (error) {
    console.log('error occurred while fetching User info', error);
  }
};

const fetchUserInfo = async (userId) => {
  try {
    const response = await fetchUserData(userId);
    return response.userInfos;
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
};

const fetchSessionsLength = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}/average-sessions`);
    return response.data.data.sessions;
  } catch (error) {
    console.log('error occurred while fetching User sessions length', error);
  }
};

const fetchScore = async (userId) => {
  try {
    const userData = await fetchUserData(userId);
    return userData.score || userData.todayScore;
  } catch (error) {
    console.log('error occurred while fetching Score', error);
  }
};

const fetchPerformance = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}/performance`);
    return response.data.data;    
  } catch (error) {
    console.log('error occurred while fetching Performance', error);
  }
};

const fetchActivityKinds = async (userId) => {
  try {
    const performance = await fetchPerformance(userId);
    return performance.kind;    
  } catch (error) {
    console.log('error occurred while fetching activity kinds', error);    
  }
}

const fetchKeyData = async (userId) => {
  try {
    const userData = await fetchUserData(userId);
    return userData.keyData;    
  } catch (error) {
    console.log('error occurred while fetching key data', error);        
  }
}

export {
  fetchUserInfo,
  fetchActivity,
  fetchSessionsLength,
  fetchScore,
  fetchActivityKinds,
  fetchKeyData,
};
