import { useContext, useEffect, useState } from 'react';

import UserContext from '/src/context.js';
import { fetchScore } from '/src/services';

const COLORS = ['#ff0101', 'transparent'];

import './Score.scss';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
const Score = () => {
  const userId = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const scoreData = await fetchScore(userId);
        setScore(scoreData);
        setData([
          { name: 'Achieved', value: scoreData },
          { name: 'Remaining', value: 1 - scoreData },
        ]);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch user activity', error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div className="score-chart">
          <h2 className="chart-title">Score</h2>
          <div className="score-center">
            <p className="score-percentage">{`${Math.round(score * 100)}%`}</p>
            <p className="score-label">
              de votre
              <br />
              objectif
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={100}
                startAngle={90}
                endAngle={450}
                paddingAngle={5}
                cornerRadius={10}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} stroke={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};
export default Score;
