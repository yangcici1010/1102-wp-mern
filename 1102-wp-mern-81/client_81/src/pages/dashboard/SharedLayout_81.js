import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';

import { Navbar_81, BigSidebar_81, SmallSidebar_81 } from '../../components';

const SharedLayout_81 = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar_81 />
        <BigSidebar_81 />
        <div>
          <Navbar_81 />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout_81;

/*
const SharedLayout_81 = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='add-job'>add job</Link>
        <Link to='all-jobs'>all jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
*/
