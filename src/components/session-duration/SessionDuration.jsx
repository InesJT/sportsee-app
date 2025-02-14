import { useContext, useEffect, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import UserContext from '/src/context.js';
import { fetchSessionsDuration } from '/src/services';
import CustomToolTip from './CustomToolTip';
import CustomCursor from './CustomCursor';

const numberToWeekday = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D',
};

import './SessionDuration.scss';

const SessionDuration = () => {
  const userId = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const rawData = await fetchSessionsDuration(userId);
        const sessionsData = [
          { weekday: '', sessionLength: 0 }, // Dummy at the start of the chart
          ...rawData.map((session) => ({
            ...session,
            weekday: numberToWeekday[session.day],
          })),
          { weekday: '', sessionLength: 0 }, // Dummy at the end of the chart
        ];
        setData(sessionsData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch sessions duration', error);
      }
    };

    fetchSessionData();
  }, [userId]);

  return (
    <>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div className="session-duration-chart">
          <h2 className="chart-title">
            <span className="white-color">Durée moyenne des sessions</span>
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 24, right: -20, left: -20, bottom: 5 }}>
              <Tooltip content={<CustomToolTip />} cursor={<CustomCursor />} />
              <Line
                type="natural"
                dataKey="sessionLength"
                stroke="url(#colorUv)"
                strokeWidth={3}
                activeDot={{
                  stroke: '#ffffff',
                  strokeWidth: 4,
                  r: 2,
                }}
                dot={false}
              />
              <XAxis dataKey="weekday" tick={{ fontSize: '0.75rem', fontWeight: 500, fill: '#ffffff' }} tickLine={false} axisLine={false} />
              <YAxis hide domain={['dataMin-10', 'dataMax+10']} />
              <defs>
                <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default SessionDuration;
