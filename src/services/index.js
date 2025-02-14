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
		return null;
	}
};

const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}`);
    return response.data.data;
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      const response = await fetchMockData();
      return response.UserInformation.find((m) => m.id == userId);
    } else {
      console.log('error occurred while fetching User info', error);
    }
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
    if (error.code === 'ERR_NETWORK') {
      const response = await fetchMockData();
      return response.UserActivity.find((m) => m.id == userId);
    } else {
      console.log('error occurred while fetching User activities', error);
    }
  }
};

const fetchSessionsDuration = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}/average-sessions`);
    return response.data.data.sessions;
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      const response = await fetchMockData();
      return response.UserAverageSessions.find((m) => m.id == userId);
    } else {
      console.log('error occurred while fetching User sessions length', error);
    }
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
    if (error.code === 'ERR_NETWORK') {
      const response = await fetchMockData();
      return response.UserPerformance.find((m) => m.id == userId);
    } else {
      console.log('error occurred while fetching Performance', error);
    }
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
  fetchSessionsDuration,
  fetchScore,
  fetchActivityKinds,
  fetchKeyData,
};
