import styled from 'styled-components'

export const TopBar = styled.nav`
  position: fixed;
  width: 100%;
  height: ${({ size }) => size ? "70px" : "100px"};
  padding-right: 5%;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 11pt;
  transition: all 1s;
  z-index: 2;

  li {
    display: inline;
    margin: 0 30px;
  }
}`

export const BurgerBar = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  display: flex;
  transition: all 1s;
  z-index: 2;
`

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  right: 25px;
  z-index: 2;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;