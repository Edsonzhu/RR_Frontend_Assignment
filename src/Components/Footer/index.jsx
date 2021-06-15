import styled from 'styled-components';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components 
import BodyTemplate from "../BodyTemplate";
import SocialMedia from '../SocialMedia';

const Background = styled.div`
  background-color: #303030;
  color: #fff;
`

const Body = styled(BodyTemplate)`
  display: flex;
  justify-content: space-between;
  padding-top: 0;
  padding-bottom: 27px;
`

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Background>
      <Body>
        <div>
          <FontAwesomeIcon icon={faCopyright} /> Copyright Acme Inc. {year}
        </div>
        <SocialMedia />
      </Body>  
    </Background>
  )
}

export default Footer;