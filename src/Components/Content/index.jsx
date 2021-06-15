import styled from 'styled-components';

// Component
import BodyTemplate from '../BodyTemplate';
import Title from '../Title';

const Body = styled(BodyTemplate)`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 926px) {
    flex-direction: column;
  }
`

const Image = styled.img.attrs({
  src: '/assets/heart-lamps.jpg',
})`
  min-width: 380px;
  max-width: 500px;
  width: 100%;
`

const Space = styled.div`
  min-width: 30px;
  min-height: 30px;
`

const Info = styled.div`
@media (max-width: 926px) {
  text-align: center;
}
`

const Text = styled.p`
  margin-bottom: 16px;
`

const Link = styled.div`
  font-weight: 600;
  text-decoration-line: underline;
  color: #0043BF;
`

const Content = () => {
  const handleClick = () => {
    console.log("Redirect to the full feature list page")
  }

  return (
    <Body>
      <Image />
      <Space />
      <Info>
        <Title>
          Make your ticket holders happy
        </Title>
        <Text>
          A beautiful little sunset. Talent is a pursued interest. That is to say, anything you practice you can do. 
          This is probably the greatest thing that's ever happened in my life. These things happen automatically. 
          All you have to do is just let them happen.
          <br />
          <br />
          Just let go - and fall like a little waterfall.
          Nothing's gonna make your husband or wife madder than coming home and having a snow-covered dinner. 
          Just pretend you are a whisper floating across a mountain. Zip. That easy.
        </Text>
        <Link onClick={handleClick} >
          View full feature list
        </Link>
      </Info>
    </Body>
  )
}

export default Content;