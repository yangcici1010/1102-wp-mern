import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import Landing_81 from "./pages/Landing_81";
import {
  Landing_81,
  Register_81,
  Error_81,
  ProtectedRoute_81,
  TestFetchUseCors_81,
  TestFetchUseProxy_81,
} from './pages';

import {
  AddJob_81,
  AllJobs_81,
  Profile_81,
  Stats_81,
  SharedLayout_81,
} from './pages/dashboard';

import styled from 'styled-components';

function App_81() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute_81>
              <SharedLayout_81 />
            </ProtectedRoute_81>
          }
        >
          <Route index element={<Stats_81 />} />
          <Route path='profile' element={<Profile_81 />} />
          <Route path='add-job' element={<AddJob_81 />} />
          <Route path='all-jobs' element={<AllJobs_81 />} />
        </Route>
        <Route path='/landing' element={<Landing_81 />} />
        <Route path='/register' element={<Register_81 />} />
        <Route path='/testcors' element={<TestFetchUseCors_81 />} />
        <Route path='/testproxy' element={<TestFetchUseProxy_81 />} />
        <Route path='*' element={<Error_81 />} />
      </Routes>
      {/* <Landing_81 /> */}
    </BrowserRouter>
  );
}

export default App_81;
