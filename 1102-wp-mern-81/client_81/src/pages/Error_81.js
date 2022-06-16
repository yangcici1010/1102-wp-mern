import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Error_81';

import img from '../assets/images/not-found.svg'

const Error_81 = () => {
  return (
    <Wrapper className="full-page">
      <div>
          <img src={img} alt='not found' />
          <h3>Ohh! page not found</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/">back home</Link>
      </div>
      
    </Wrapper>
  )
}

export default Error_81
