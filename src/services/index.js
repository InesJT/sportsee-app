import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const fetchMockData = async () => {
	try {
		const response = await fetch("/mock.json");
		if (!response.ok) throw new Error("Failed to load mock data");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching mock data", error);
		throw new Error("Failed to load mock data");
	}
};

const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}`);
    return response.data.data;
  } catch (error) {
    console.error("Could not fetch data from backend", error);
    const response = await fetchMockData();
    return response.UserInformation.find((m) => m.id == userId);
  }
};

const fetchUserInfo = async (userId) => {
  try {
    const response = await fetchUserData(userId);
    return response.userInfos;
  } catch (error) {
    console.log('error occurred while fetching User info', error);
    return null;
  }
};

const fetchActivity = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}/activity`);
    return response.data.data.sessions;
  } catch (error) {
    console.error("Could not fetch data from backend", error);
    try {
      const response = await fetchMockData();
      const result = response.UserActivity.find((m) => m.userId == userId);
      return result.sessions;
    } catch (err) {
      console.log('error occurred while fetching User activity', err);
      return null;      
    }    
  }
};

const fetchSessionsDuration = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}/average-sessions`);
    return response.data.data.sessions;
  } catch (error) {
    console.error("Could not fetch data from backend", error);
    try {
      const response = await fetchMockData();
      const result =  response.UserAverageSessions.find((m) => m.userId == userId);
      return result.sessions;
    } catch (err) {
      console.log('error occurred while fetching Session duration', err);
      return null;      
    }
  }
};

const fetchScore = async (userId) => {
  try {
    const userData = await fetchUserData(userId);
    return userData.score || userData.todayScore;
  } catch (error) {
    console.log('error occurred while fetching User score', error);
    return null;
  }
};

const fetchPerformance = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}/performance`);
    return response.data.data;    
  } catch (error) {
    console.error("Could not fetch data from backend", error);
    try {
      const response = await fetchMockData();
      return response.UserPerformance.find((m) => m.userId == userId);
    } catch (err) {
      console.log('error occurred while fetching User performance', err);
      return null;      
    }      
  }
};

const fetchActivityKinds = async (userId) => {
  try {
    const performance = await fetchPerformance(userId);
    return performance.data;    
  } catch (error) {
    console.log('error occurred while fetching activity kinds', error);
    return null;   
  }
}

const fetchKeyData = async (userId) => {
  try {
    const userData = await fetchUserData(userId);
    return userData.keyData;    
  } catch (error) {
    console.log('error occurred while fetching Key data', error);
    return null;       
  }
}

export {
  fetchUserInfo,
  fetchActivity,
  fetchSessionsDuration,
  fetchScore,
  fetchActivityKinds,
  fetchKeyData,
};
