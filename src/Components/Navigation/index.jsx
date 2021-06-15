import styled from "styled-components";
import GoogleMapReact from 'google-map-react';
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components 
import BodyTemplate from "../BodyTemplate";

const features = [
  {
    name: 'Event organizer tools',
    ref: '/'
  },
  {
    name: 'Timer tools',
    ref: '/'
  },
  {
    name: 'Charity co-ordinator tools',
    ref: '/'
  },
  {
    name: 'Participant experience',
    ref: '/'
  },
];

const tools = [
  {
    name: 'Dashboard maker',
    ref: '/'
  },
  {
    name: 'Data & analytics',
    ref: '/'
  },
  {
    name: 'Email marketing tool',
    ref: '/'
  },
  {
    name: 'Social promotion tool',
    ref: '/'
  },
];

const Background = styled.div`
  background-color: #303030;
  color: #fff;
`

const Body = styled(BodyTemplate)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 62px;
  padding-bottom: 32px;
`

const Container = styled.div`
  width: 285px;
  height: 135px;
  margin-bottom: 30px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;
`

const Item = styled.div`
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.291667px;
  text-decoration-line: ${({underline}) => underline ? 'underline' : 'none'};
  margin-top: 10px;
`

const Navigation = () => {
  const defaultProps = {
    center: {
      lat: 42.981876210389885,
      lng: -81.25153243765315
    },
    zoom: 13
  };

  return (
    <Background> 
      <Body>
      <Container>
        <Title>Features</Title>
        {features.map(item => (
          <Item onClick={() => console.log("Redirect to", item.ref)} underline >
            {item.name}
          </Item>
        ))}
      </Container>
      <Container>
      <Title>Tools</Title>
      {tools.map(item => (
          <Item onClick={() => console.log("Redirect to", item.ref)} underline >
            {item.name}
          </Item>
        ))}
      </Container>
      <Container>
      <Title>Contact</Title>
        <Item>
        <FontAwesomeIcon icon={faPhone} inverse /> 1-888-555-5555
        </Item>
        <Item>
        <FontAwesomeIcon icon={faEnvelope} /> example@example.com
        </Item>
        <Item>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Fake Street, London, ON
        </Item>
        <Item>
        A1B 2C3
        </Item>
      </Container>
      <Container>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD70QScOgR5yOJLbI0NOkB0LBGk1P5CaRo' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
      </GoogleMapReact>
      </Container>
      </Body>
    </Background>
  )
}

export default Navigation;