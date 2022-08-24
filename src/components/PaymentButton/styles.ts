import styled from 'styled-components'

const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.3;
  text-transform: uppercase;
  cursor: pointer;

  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.button};

  border: 0;
  border-radius: 6px;
  padding: 1rem 1.2rem;

  margin-right: 0.75rem;

  & > svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.5rem;
  }
`

export const ButtonContainer = styled(ButtonBase)``

export const ButtonContainerSelected = styled(ButtonBase)`
  background: ${(props) => props.theme['purple-light']};
  border: 2px solid ${(props) => props.theme.purple};
`
