
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

// import Landing_81 from "./pages/Landing_81";
import styled from 'styled-components';

import {Landing_81, /*Dashboard_81, */Register_81, Error_81,final_81,work_81} from './pages';
// import work_81 from './pages/work_81';
// import final_81 from './pages/final_81';



function App_81() {
  return (
    <BrowserRouter>
    <Routes>
        {/*<Route path="/" element={<Dashboard_81/>}/>*/}
         <Route path='/landing' element={<Landing_81/>} />
         <Route path='/register' element={<Register_81/>} />
         <Route path='*' element={<Error_81/>}/>
         <Route path='/final' element={<final_81/>}/>
         <Route path='/work' element={<work_81/>}/>
      
         
      </Routes>
      {/* <Landing_81/> */}
    </BrowserRouter>
  );
}

export default App_81;
