import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Courses from './components/Courses/Courses';
import General from './components/General/General';

import Languages from './components/Languages/Languages';
import Skills from './components/Skillss/Skills';


const MainRoutes = () => {
    const PUBLIC = [
        {link: '/', element: <General/>, id: 1 },
        {link: '/languages', element: <Languages/>, id: 2 },
        {link: '/skills', element: <Skills/>, id: 3 },
        {link: '/courses', element: <Courses/>, id: 4 },
    ]
    return (
    <Routes>
      {PUBLIC.map((item)=>(
        <Route key={item.id} path={item.link} element={item.element} />
      ))}
    </Routes>
    );
};

export default MainRoutes;