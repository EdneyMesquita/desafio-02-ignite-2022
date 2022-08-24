import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;

  background: ${(props) => props.theme.button};
  border-radius: 6px;
  margin-right: 0.5rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    padding: 0.7rem 0.25rem;
    cursor: pointer;

    background: ${(props) => props.theme.button};
    color: ${(props) => props.theme.purple};

    &:first-of-type {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-of-type {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const Input = styled.input`
  max-width: 1.5rem;
  border: 0;
  background: transparent;

  color: ${(props) => props.theme.title};
  text-align: center;

  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
