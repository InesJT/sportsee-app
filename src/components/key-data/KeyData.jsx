import { useContext, useEffect, useState } from 'react';

import UserContext from '/src/context.js';
import { fetchKeyData } from '/src/services';

import SpentEnergy from './SpentEnergy';

import caloriesIcon from '/src/assets/icon-calories.svg';
import proteinIcon from '/src/assets/icon-protein.svg';
import carbsIcon from '/src/assets/icon-carbs.svg';
import fatIcon from '/src/assets/icon-fat.svg';

const KeyData = () => {
  const userId = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [keyDataList, setKeyDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const keyData = await fetchKeyData(userId);
        setKeyDataList([
          {
            icon: caloriesIcon,
            number: keyData.calorieCount,
            unit: 'kCal',
            name: 'Calories',
          },
          {
            icon: proteinIcon,
            number: keyData.proteinCount,
            unit: 'g',
            name: 'Protéines',
          },
          {
            icon: carbsIcon,
            number: keyData.carbohydrateCount,
            unit: 'g',
            name: 'Glucides',
          },
          {
            icon: fatIcon,
            number: keyData.lipidCount,
            unit: 'g',
            name: 'Lipides',
          },
        ]);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch key data', error);
      }
    };

    fetchData();
  }, [userId]);

  return <>{loading ? <span>Loading...</span> : keyDataList.map((data) => <SpentEnergy key={data.name} data={data} />)}</>;
};

export default KeyData;
