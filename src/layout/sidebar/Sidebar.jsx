import Yoga from '/src/assets/icon-yoga.svg';
import Swimming from '/src/assets/icon-swimming.svg';
import Bike from '/src/assets/icon-bike.svg';
import Weight from '/src/assets/icon-weight.svg';

import './Sidebar.scss';

const activities = [
  {
    id: '1',
    alt: 'yoga',
    image: Yoga,
  },
  {
    id: '2',
    alt: 'swimming',
    image: Swimming,
  },
  {
    id: '3',
    alt: 'biking',
    image: Bike,
  },
  {
    id: '4 ',
    alt: 'bodybuilding',
    image: Weight,
  },
];

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar--icon-container">
      {activities.map((activity) => {
        return <img key={activity.id} src={activity.image} alt={activity.alt} />;
      })}
    </div>
    <p className="sidebar--rights">Copyright, SportSee 2025</p>
  </aside>
);

export default Sidebar;
