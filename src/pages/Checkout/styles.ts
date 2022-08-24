import styled from 'styled-components'

export const CheckoutForm = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${(props) => props.theme.title};

    margin-bottom: 0.937rem;
  }
`

export const CompletionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 28rem);
`

export const AddressContainer = styled.div`
  display: flex;

  & > svg {
    color: ${(props) => props.theme['yellow-dark']};
    margin-right: 0.5rem;
  }

  & > div {
    display: flex;
    flex-direction: column;

    p {
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme.subtitle};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme.text};
    }
  }
`

export const PaymentContainer = styled.div`
  display: flex;

  & > svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.5rem;
  }

  & > div {
    display: flex;
    flex-direction: column;

    p {
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme.subtitle};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme.text};
    }
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background: ${(props) => props.theme.card};
  padding: 2.5rem;

  border-radius: 6px;

  margin-bottom: 0.75rem;

  main {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    width: 100%;
    margin-top: 2rem;

    & > div:nth-child(2) {
      input {
        flex: 1;
      }
    }

    & > div:nth-child(3) {
      input:nth-child(2) {
        flex: 1;
      }
    }

    & > div:nth-child(4) {
      input:nth-child(2) {
        flex: 1;
      }

      input:nth-child(3) {
        width: 3.75rem;
        text-transform: uppercase;
      }
    }

    input {
      border: 1px solid ${(props) => props.theme.button};
      background: ${(props) => props.theme.input};
      padding: 0.75rem;

      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme.label};

      border-radius: 4px;
    }
  }
`

export const FormRow = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const SelectedCoffee = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.card};
  padding: 2.5rem;

  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  min-width: 28rem;

  footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    margin-top: 1rem;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.75rem;

      span {
        font-size: 0.875;
        line-height: 1.3;
        color: ${(props) => props.theme.text};
      }

      p {
        font-size: 1rem;
        line-height: 1.3;
        color: ${(props) => props.theme.text};
      }

      strong {
        font-size: 1.25rem;
        line-height: 1.3;
        font-weight: bold;
        color: ${(props) => props.theme.subtitle};
      }
    }
  }
`
export const ConfirmButton = styled.button`
  padding: 0.75rem;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 0.875;
  line-height: 1.3;

  background: ${(props) => props.theme.yellow};
  border: 0;
  border-radius: 6px;

  margin-top: 1.5rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const PaymentButtonsRow = styled.div`
  display: flex;
  margin-top: 2rem;
`
