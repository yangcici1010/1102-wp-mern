
import Landing_81 from './pages/Landing_81';
import styled from 'styled-components'

const Button = styled.button`
background: red;
color:white;
font-size:1rem;
`
const ButtonSecond = styled.button`
background: blue;
color:white;
font-size:1rem;
`
function App_81() {
  return (
    <div>
      <Button>Click me</Button >
      <ButtonSecond>Click me</ButtonSecond >
      <Landing_81 />
    </div>
  );
}

export default App_81;
