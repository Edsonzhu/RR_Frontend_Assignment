import styled from 'styled-components';
import { Link } from "react-router-dom";

// Component
import BodyTemplate from '../BodyTemplate';

const Background = styled.div`
  background-image: url(/assets/hero-background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
`

const Body = styled(BodyTemplate)`
  max-width: 700px;
  font-weight: 300;
  font-size: 26px;
  line-height: 35px;
  text-align: center;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  margin-bottom: 16px;
`

const DemoButton = styled(Link)`
  display: block;
  margin: 24px auto 0;
  background-color: #0043BF;
  border-radius: 26px;
  padding: 15px 0;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  color: #fff;
  width: 185px;
  text-decoration: none;
`

const Banner = () => (
  <Background>
    <Body>
      <Title>
        Make event management a breeze
      </Title>
        ACME Events Inc. makes making beautiful event landing pages a DIY adventure. 
      <DemoButton to='/#bookDemo' >
        Book a demo
      </DemoButton>
    </Body>
  </Background>
)

export default Banner;