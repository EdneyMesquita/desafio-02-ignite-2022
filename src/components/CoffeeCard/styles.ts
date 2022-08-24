import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.card};
  padding: 1.5rem 1.25rem;

  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -2.81rem;
    margin-bottom: 0.75rem;
  }

  & > strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.3;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  & > span {
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    font-weight: 400;

    color: ${(props) => props.theme.label};
  }
`

export const Categories = styled.div`
  display: flex;
  gap: 0.26rem;
`

export const ChipContainer = styled.div`
  padding: 0.25rem 0.5rem;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: bold;
  font-size: 0.625rem;
  line-height: 1.3;
  border-radius: 100px;
  text-transform: uppercase;
`
export const CartButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  padding: 0.5rem;

  font-size: 0.875;
  line-height: 1.3;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`
export const CardFooter = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  & > strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.3;

    &::before {
      content: 'R$ ';
      font-size: 0.875rem;
      line-height: 1.3;
      font-weight: 400 !important;
      font-family: 'Roboto', sans-serif;
    }
  }

  & > div {
    display: flex;
    align-items: center;
  }
`
