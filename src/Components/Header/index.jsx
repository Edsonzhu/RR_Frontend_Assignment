import styled from 'styled-components';

// Components
import BodyTemplate from '../BodyTemplate';

const Background = styled.div`
  background-color: #303030;
`

const Body = styled(BodyTemplate)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  padding-top: 0;
  padding-bottom: 0;

  a:visited {
    color: #fff;
  }

  a {
    text-decoration: none;
  }
`

const SignupButton = styled.button`
  margin-left: 31px;
  background-color: #E3E9F7;
  color: #1A1A1A;
  padding: 5px 15px;
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
`

const Header = () => {
  const handleSignup = () => {
    console.log("redirect the user to the sign up page");
    // using react router and then use the redirect function;
  }

  return (
  <Background>
    <Body>
      Generic Logo &trade;
      <div>
        <a href='/'>Log-in</a>
        <SignupButton onClick={handleSignup} >
          Sign Up
        </SignupButton>
      </div>
    </Body>
  </Background>
)}

export default Header;