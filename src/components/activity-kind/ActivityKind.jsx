import { useContext, useEffect, useState } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';

import UserContext from '/src/context.js';
import { fetchActivityKinds } from '/src/services';

import './ActivityKind.scss';

const ActivityKind = () => {
  const userId = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const kindsData = await fetchActivityKinds(userId);
      setData(kindsData);
      setLoading(false);
    };
    fetchData();
  }, [userId]);

  return (
    <>
      {loading ? (
        <span>Chargement...</span>
      ) : (
        <div className="activity-kind-chart">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius="40%" data={data}>
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
