import { useContext, useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import UserContext from '/src/context.js';
import { fetchActivity } from '../../services';
import CustomToolTip from './CustomToolTip';
import CustomLegend from './CustomLegend';

import './DailyActivity.scss';

const DailyActivity = () => {
  const userId = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        const activityData = await fetchActivity(userId);
        setData(activityData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch user activity', error);
      }
    };

    fetchActivityData();
  }, [userId]);

  return (
    <>
      {loading ? (
        <span>Chargement...</span>
      ) : (
        <div className="activity-chart">
          <h2 className="chart-title">Activité quotidienne</h2>
          <ResponsiveContainer width="100%" height={310}>
            <BarChart data={data} margin={{ top: 24, right: 30, left: 30, bottom: 20 }} barGap={8}>
              <CartesianGrid stroke="#DEDEDE" strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis
                dataKey="day"
                tickFormatter={(day) => new Date(day).getDate()}
                tick={{ fill: '#9b9eac' }}
                tickLine={false}
                stroke="#DEDEDE"
                strokeWidth={2}
                tickMargin={12}
              />
              <YAxis
                orientation="right"
                tick={{ fill: '#9b9eac' }}
                tickLine={false}
                axisLine={false}
                domain={['dataMin', 'dataMax']}
                ticks={(() => {
                  // Get the min and max values of the data
                  const minValue = Math.min(...data.map((item) => item.kilogram), ...data.map((item) => item.calories));
                  const maxValue = Math.max(...data.map((item) => item.kilogram), ...data.map((item) => item.calories));

                  // Calculate the number of ticks and step size
                  const numberOfTicks = 3;
                  const step = (maxValue - minValue) / (numberOfTicks - 1);

                  // Create an array of ticks at equal intervals
                  const ticks = [Math.ceil(minValue - 20)]; // Add the minimum value -20 (for better chart readability), rounded up
                  for (let i = 1; i < numberOfTicks - 1; i++) {
                    ticks.push(Math.ceil(minValue + step * i)); // Add the interval value(s), rounded up
                  }
                  ticks.push(Math.ceil(maxValue + 20)); // Add the maximum value +20, rounded up

                  return ticks;
                })()}
                tickMargin={16}
              />
              <Tooltip
                content={<CustomToolTip />}
                cursor={{
                  fill: 'rgba(196, 196, 196, 0.5)', // hover rectangle color
                }}
              />
              <Bar dataKey="kilogram" fill="#282d30" name="Poids (kg)" radius={[4, 4, 0, 0]} barSize={8} />
              <Bar dataKey="calories" fill="#e60000" name="Calories brûlées (kCal)" radius={[4, 4, 0, 0]} barSize={8} />
              <Legend content={(props) => <CustomLegend {...props} />} verticalAlign="top" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default DailyActivity;
