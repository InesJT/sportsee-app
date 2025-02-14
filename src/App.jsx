import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from './layout';

import Community from '/src/pages/community';
import Dashboard from '/src/pages/dashboard';
import Profile from '/src/pages/profile';
import Settings from '/src/pages/settings';
import Error404 from '/src/pages/error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="community" element={<Community />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
