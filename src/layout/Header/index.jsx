import React from "react"
import GatsbyLogo from "../../components/GatsbyLogo"
import { Link } from "../../components/common"
import HeaderContainer from "./HeaderContainer"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  width: 120px;
`

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const MenuItems = styled.div`
  margin: auto 1rem;
`

const SlackButton = styled.button`
  background-color: rebeccapurple;
  color: #fff;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;

  &:hover {
    cursor: pointer;
  }
`

const Header = () => (
  <HeaderContainer>
    <NavContainer>
      <Link to="/">
        <LogoContainer>
          <GatsbyLogo />
        </LogoContainer>
      </Link>
      <MenuItemContainer>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  menuLinks {
                    name
                    link
                  }
                }
              }
            }
          `}
          render={data => {
            const links = data.site.siteMetadata.menuLinks

            return links.map(link => {
              if (link.name === "Gatsby NYC") {
                return
              }
              return (
                <MenuItems key={link.name}>
                  <Link to={link.link}>
                    {link.name === "Join Our Slack" ? (
                      <SlackButton>{link.name}</SlackButton>
                    ) : (
                      link.name
                    )}
                  </Link>
                </MenuItems>
              )
            })
          }}
        />
      </MenuItemContainer>
    </NavContainer>
  </HeaderContainer>
)

export default Header
