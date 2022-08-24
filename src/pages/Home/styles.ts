import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const PresentationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5.875rem 0;

  & > div {
    margin-right: 3.5rem;
  }

  img {
    width: 29.75rem;
    height: 22.5rem;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme.title};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme.text};
    margin-top: 1rem;
  }
`

export const List = styled.ul`
  list-style: none;
  columns: 2;

  margin-top: 4.125rem;

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
        background: ${(props) => props.theme['yellow-dark']};
      }
    }

    &:nth-child(2) {
      span {
        background: ${(props) => props.theme.yellow};
      }
    }

    &:nth-child(3) {
      span {
        background: ${(props) => props.theme.text};
      }
    }

    &:nth-child(4) {
      span {
        background: ${(props) => props.theme.purple};
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

export const CoffeeListContainer = styled.div`
  padding-bottom: 9.81rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme.title};
    margin-bottom: 3.375rem;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
