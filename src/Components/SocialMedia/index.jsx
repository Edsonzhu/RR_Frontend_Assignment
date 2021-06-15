import styled from 'styled-components';
import { faFacebookSquare, faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialStyled = styled(FontAwesomeIcon)`
  font-size: 26px;
  margin-left: 24px;
  cursor: pointer;
  color: #fff;
`

const SocialMedia = () => (
  <div>
    <a href='https://www.facebook.com'>
    <SocialStyled icon={faFacebookSquare} />
    </a>
    <a href='https://twitter.com'>
    <SocialStyled icon={faTwitterSquare} />
    </a>
    <a href='https://www.instagram.com'>
    <SocialStyled icon={faInstagram} />
    </a>
  </div>
)

export default SocialMedia;