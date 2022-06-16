import { useAppContext } from '../context/appContext_81';
import NavLinks from './NavLinks_81';
import Logo from '../components/Logo_81';
import Wrapper from '../assets/wrappers/BigSidebar_81';

const BigSidebar_81 = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar_81;
