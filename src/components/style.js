import React from "react"
import styled from "styled-components"
import { Container } from "./common"

export const Button = styled.button`
  display: flex;
  margin: auto;
  background-color: rebeccapurple;
  color: #fff;
  padding: 0.375rem 0.75rem;
  border-color: rebeccapurple;
  border-radius: 0.25rem;

  &:hover {
    cursor: pointer;
  }
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

  @media only screen and (max-width: 320px) {
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

export const MobileItems = styled.div`
  margin: 1rem auto 0;
`

export const MobileNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
`

export const MobileNavInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const MobileMenu = styled.div`
  display: ${props => props.display};
`

export const MobileMenuItems = styled.div`
  width: 100%;
  text-align: right;
`

export const bar = `width: 32px;
  height: 2px;
  background-color: rebeccapurple;
  margin: 6px 0;`

export const MenuIconContainer = styled.div`
  margin-right: ${props => props.marginRight};

  .bar1,
  .bar2,
  .bar3 {
    ${bar}
  }

  .change-bar1 {
    ${bar}
    -webkit-transform: rotate(-45deg) translate(-7px, 4px);
    transform: rotate(-45deg) translate(-7px, 4px);
  }

  .change-bar2 {
    ${bar}
    opacity: 0;
  }

  .change-bar3 {
    ${bar}
    -webkit-transform: rotate(45deg) translate(-7px, -4px);
    transform: rotate(45deg) translate(-7px, -4px);
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
`

export const NavbarItems = styled.div`
  margin: auto 1rem;

  &:last-child {
    margin-right: 0;
  }
`

export const StyledHeader = styled(Container).attrs({ as: "header" })``

export const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxContentWidth};
  padding: 1.45rem 1.0875rem;
`
