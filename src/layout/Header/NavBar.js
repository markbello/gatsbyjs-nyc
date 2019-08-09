import React from "react"
import GatsbyLogo from "../../components/GatsbyLogo"
import { Link } from "../../components/common"
import { StaticQuery, graphql } from "gatsby"

import {
  Button,
  LogoContainer,
  NavContainer,
  NavbarItemContainer,
  NavbarItems,
} from "../../components/style"

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
