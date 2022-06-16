import Wrapper from '../assets/wrappers/SmallSidebar_81';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext_81';

import Logo_81 from './Logo_81';
import NavLinks_81 from './NavLinks_81';

const SmallSidebar_81 = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo_81 />
          </header>
          <NavLinks_81 toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar_81;
