import { useContext, useEffect, useState } from 'react';

import UserContext from '/src/context.js';
import { fetchUserInfo } from '../../services';

import './Dashboard.scss';

const Dashboard = () => {
  const [firstName, setFirstName] = useState('');
  const userId = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await fetchUserInfo(userId);
      setFirstName(userInfo.firstName);
    };
    fetchData();
  }, [userId]);

  return (
    <div className="greetings">
      <p className="greetings--hello">
        Bonjour <span className="primary-color">{firstName}</span>
      </p>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Dashboard;
