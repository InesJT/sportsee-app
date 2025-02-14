import { useContext, useEffect, useState } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';

import UserContext from '/src/context.js';
import { fetchActivityKinds } from '/src/services';

const kindToLabel = {
  1: 'Cardio',
  2: 'Énergie',
  3: 'Endurance',
  4: 'Force',
  5: 'Vitesse',
  6: 'Intensité',
};

import './ActivityKind.scss';

const ActivityKind = () => {
  const userId = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetchActivityKinds(userId);
      const kindsData = rawData.map((item) => ({
        ...item,
        activity: kindToLabel[item.kind],
      }));
      setData(kindsData);
      setLoading(false);
    };
    fetchData();
  }, [userId]);

  return (
    <>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div className="activity-kind-chart">
          <ResponsiveContainer width="95%" height="95%">
            <RadarChart outerRadius="70%" data={data}>
              <PolarGrid gridType="polygon" radialLines={false} stroke="#ffffff" />
              <PolarAngleAxis dataKey="activity" tick={{ fontSize: 12, fill: '#ffffff' }} />
              <Radar name="Performance" dataKey="value" fill="#ff0101" fillOpacity={0.7} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default ActivityKind;
