import styled from 'styled-components';

const AsteriskStyled = styled.span`
  display: inline-block;
  color: #AA0000;
  font-weight: 900;
`

const Asterisk = () => (
  <AsteriskStyled>
    &#42;
  </AsteriskStyled>
)

export default Asterisk;