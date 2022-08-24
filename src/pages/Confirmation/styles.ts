import styled from 'styled-components'

export const ConfirmationContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 5rem 0;

  img {
    width: 30.75rem;
    height: 18.31rem;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme.subtitle};
    margin-top: 0.25rem;
  }
`

export const ConfirmationAside = styled.aside`
  flex: 1;
`

export const BorderedContainer = styled.div`
  border-radius: 6px 36px;
  padding: 2px;
  position: relative;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );

  margin-top: 2.5rem;
  margin-right: 6rem;

  & > div {
    border-radius: 6px 36px;
    background: ${(props) => props.theme.background};
    padding: 2.5rem;
  }
`

export const List = styled.ul`
  list-style: none;

  li {
    display: flex;
    align-items: center;
    padding-top: 1px;
    padding-bottom: 1.25rem;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme.text};

    &:nth-child(1) {
      span {
        background: ${(props) => props.theme.purple};
      }
    }

    &:nth-child(2) {
      span {
        background: ${(props) => props.theme.yellow};
      }
    }

    &:nth-child(3) {
      span {
        background: ${(props) => props.theme['yellow-dark']};
      }
    }

    & > div {
      p {
        font-size: 1rem;
        line-height: 1.3;
        color: ${(props) => props.theme.text};
      }

      strong {
        font-size: 1rem;
        line-height: 1.3;
        color: ${(props) => props.theme.text};
      }
    }
  }
`

export const ListIcon = styled.span`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 0.75rem;

  color: ${(props) => props.theme.white};
`
