import { useContext, useEffect, useState } from 'react';

import UserContext from '/src/context.js';
import { fetchUserInfo } from '/src/services';

import { ActivityKind, DailyActivity, KeyData, Score, SessionDuration } from '/src/components';

import './Dashboard.scss';
const Dashboard = () => {
  const userId = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await fetchUserInfo(userId);
      setFirstName(userInfo.firstName);
      setLoading(false);
    };
    fetchData();
  }, [userId]);

  return (
    <>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <div className="greetings">
            <p className="greetings--hello">
              Bonjour <span className="primary-color">{firstName}</span>
            </p>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="charts">
            <div className="charts--left-col">
              <DailyActivity />
              <div className="charts--small-charts">
                <SessionDuration />
                <ActivityKind />
                <Score />
              </div>
            </div>
            <div className="charts--right-col">
              <KeyData />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
