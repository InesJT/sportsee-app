import PropTypes from 'prop-types';
import { Rectangle } from 'recharts';

const CustomCursor = ({ points, width, height }) => {
  if (!points || points.length === 0) return null;
  const { x } = points[0];
  const rightMargin = 20;

  return <Rectangle x={x} y={0} width={width - x + rightMargin} height={height * 2} fill="rgba(233, 0, 0, 0.5)" />;
};

CustomCursor.propTypes = {
  points: PropTypes.arrayOf(PropTypes.object),
  width: PropTypes.number,
  height: PropTypes.number,
  stroke: PropTypes.string,
};

export default CustomCursor;
