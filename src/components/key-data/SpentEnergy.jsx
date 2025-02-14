import PropTypes from 'prop-types';

import './SpentEnergy.scss';
const SpentEnergy = ({ data }) => {
  const { icon, number, unit, name } = data;

  return (
    <div className="spent-energy">
      <img src={icon} alt={name} className="spent-energy--icon" />
      <div className="spent-energy--info">
        <p className="spent-energy--number">
          {number} <span>{unit}</span>
        </p>
        <p className="spent-energy--name">{name}</p>
      </div>
    </div>
  );
};

SpentEnergy.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    unit: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default SpentEnergy;
