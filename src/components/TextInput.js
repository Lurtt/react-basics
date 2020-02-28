import styled from 'styled-components'

const TextInput = styled.input`
  padding: 1rem 2rem;
  border: none;
  background-color: ${props => props.disabled ? "#aaa" : "#efefef"};
  color: ${(props) => props.textColor ? props.textColor : '#333'};
`

export default TextInput