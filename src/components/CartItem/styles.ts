import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme.button};
  padding: 1.5rem 0;

  &:first-child {
    padding-top: 0;
  }

  strong {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.text};
  }

  & > div {
    display: flex;

    img {
      width: 4rem;
      height: 4rem;
      margin-right: 1.25rem;
    }

    & > div {
      display: flex;
      flex-direction: column;

      p {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme.subtitle};
      }
    }
  }
`

export const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
`

export const RemoveButton = styled.button`
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
  padding: 0.5rem;

  & > svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.25rem;
  }
`
