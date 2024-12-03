import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Login from '../components/Login/Login';
import KnowYou from '../components/KnowYou/KnowYou';
import Company from '../components/Company/Company';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Login></Login>
      },
      {
        path: '/know-you',
        element:<KnowYou></KnowYou>
      },
      {
        path: '/company',
        element:<Company></Company>
      },
    ],
  },
]);

export default router;
