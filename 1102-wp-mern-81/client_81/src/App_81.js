
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// import Landing_81 from "./pages/Landing_81";
import styled from 'styled-components';

import { Landing_81, Dashboard_81, Register_81, Error_81, TestFetchUseCors_81, TestFetchUseProxy_81 } from './pages';



function App_81() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard_81 />} />
        <Route path='/landing' element={<Landing_81 />} />
        <Route path='/testcors' element={<TestFetchUseCors_81 />} />
        <Route path='/testproxy' element={<TestFetchUseProxy_81 />} />
        <Route path='*' element={<Error_81 />} />



      </Routes>
      {/* <Landing_81/> */}
    </BrowserRouter>
  );
}

export default App_81;
