import PropTypes from 'prop-types';

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activity-chart--tooltip">
        <p>{payload[0].value + ' kg'}</p>
        <p>{payload[1].value + ' Kcal'}</p>
      </div>
    );
  }
  return null;
};

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

export default CustomToolTip;
