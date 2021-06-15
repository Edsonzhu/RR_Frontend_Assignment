import styled from 'styled-components';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingStyled = styled.div`
  color: #303030;
  margin-top: 24px;
`

const LoadingSpin = () => {
  return (
    <LoadingStyled>
      <FontAwesomeIcon icon={faSpinner} spin /> Submitting...
    </LoadingStyled>
  )
}

export default LoadingSpin;