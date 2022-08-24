import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  img {
    width: 5.31rem;
  }

  & > nav {
    display: flex;

    a {
      text-decoration: none;
      display: block;
    }
  }
`
const ButtonBase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border-radius: 8px;

  padding: 0.5rem 0.625rem;

  font-size: 0.875;
  line-height: 1.3;
`
export const LocationButton = styled(ButtonBase)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  margin-right: 0.75rem;
`

export const CartButton = styled(ButtonBase)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const Badge = styled.span`
  font-weight: bold;
  font-size: 0.75rem;

  width: 1.25rem;
  height: 1.25rem;

  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50%;

  margin-top: calc(1px - 2rem);
  margin-left: 1.3rem;
`
