import styled from "styled-components"
import { Container } from "./common"

const removeButton = `
  background-color: transparent;
  border-color: transparent;
  &:hover {
    background-color: transparent;
  }
`

const button = `
  display: flex;
  margin: auto;
  background-color: rebeccapurple;
  color: #fff;
  padding: 0.375rem 0.75rem;
  border-color: rebeccapurple;
  border-radius: 0.25rem;
  transition: ease 0.15s;

  a {
    color: #fff;
  }

  &:hover {
    background-color: #4d2674;
    cursor: pointer;
    transition: ease 0.15s;
  }
`

export const Button = styled.button`
  ${button}
`

export const SlackFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #eee;
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 0.5rem;

  h1 {
    text-align: center;
  }

  form {
    margin-bottom: 0;
  }
`

export const EmailInput = styled.input`
  width: 320px;
  border: 1px solid #999;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  background-color: #fff;
  background-clip: padding-box;
  margin-bottom: 1rem;

  @media only screen and (max-width: 374px) {
    width: 240px;
  }
`

export const Toast = styled.div`
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  text-align: center;
`

export const LogoContainer = styled.div`
  width: 120px;
`

const bar = `width: 32px;
  height: 2px;
  margin: 6px 0;`

export const MenuIconContainer = styled.div`
  display: none;
  margin-left: auto;
  z-index: 9999;
  position: relative;

  .bar {
    ${bar}
    background-color: ${props => props.backgroundColor};
    -webkit-transform: rotate(0);
    transform: rotate(0);
    transition: ease 0.15s;
  }

  .change-bar1 {
    -webkit-transform: rotate(-45deg) translate(-7px, 4px);
    transform: rotate(-45deg) translate(-7px, 4px);
    transition: ease 0.15s;
  }

  .change-bar2 {
    opacity: 0;
    transition: ease 0.15s;
  }

  .change-bar3 {
    -webkit-transform: rotate(45deg) translate(-7px, -4px);
    transform: rotate(45deg) translate(-7px, -4px);
    transition: ease 0.15s;
  }

  @media (max-width: 768px) {
    display: ${props => props.displayMenu};
  }
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavbarItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: ${props => props.mobileDisplay};
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    background-color: rebeccapurple;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    a {
      color: #fff;
    }
  }
`

export const NavbarItems = styled.div`
  margin: auto 1rem;
  &:last-child {
    ${button},
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    &: first-child {
      margin-top: 80px;
    }
    &: last-child {
      padding: 1rem;
      ${removeButton}
    }
  }
`

export const StyledHeader = styled(Container).attrs({ as: "header" })``

export const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxContentWidth};
  padding: 1.45rem 1.0875rem;
`
