import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Vacancies from './pages/Vacancies';
import VacancyData from './pages/VacancyData';
import { ROUTES } from './constants/routes'
import { vacanciesData } from './constants/vacancies';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: ROUTES.CONTACTS,
        element: <Contacts />
      },
      {
        path: ROUTES.VACANCIES,
        element: <Vacancies />
      },
      ...vacanciesData.map(({ href, ...props }) => ({ path: href, element: <VacancyData {...props} />  }))
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
