import React from "react"
import GatsbyLogo from "../../components/GatsbyLogo"
import { Link } from "../../components/common"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import Button from "../../components/Button"

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  width: 120px;
`

const NavbarItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const NavbarItems = styled.div`
  margin: auto 1rem;

  &:last-child {
    margin-right: 0;
  }
`

const NavBar = (
  <NavContainer>
    <Link to="/">
      <LogoContainer>
        <GatsbyLogo />
      </LogoContainer>
    </Link>
    <NavbarItemContainer>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                navbarLinks {
                  id
                  name
                  link
                }
              }
            }
          }
        `}
        render={data => {
          const links = data.site.siteMetadata.navbarLinks

          return links.map(link => {
            if (link.id === 1) {
              return
            }
            return (
              <NavbarItems key={link.id}>
                <Link to={link.link}>
                  {link.id === 3 ? (
                    <Button aria-label="Join our Slack channel." type="submit">
                      {link.name}
                    </Button>
                  ) : (
                    link.name
                  )}
                </Link>
              </NavbarItems>
            )
          })
        }}
      />
    </NavbarItemContainer>
  </NavContainer>
)

export default NavBar
