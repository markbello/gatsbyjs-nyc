import React, { useState } from "react"
import GatsbyLogo from "../../components/GatsbyLogo"
import { Link } from "../../components/common"
import { StaticQuery, graphql } from "gatsby"

import ToggleButton from "../../components/ToggleButton"

import {
  LogoContainer,
  NavContainer,
  NavbarItemContainer,
  NavbarItems,
} from "../../components/style"

export default function NavBar() {
  const [menu, setMenu] = useState(false)

  return (
    <NavContainer>
      <Link to="/">
        <LogoContainer>
          <GatsbyLogo />
        </LogoContainer>
      </Link>
      <NavbarItemContainer mobileDisplay={!menu ? "none" : "block"}>
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
              if (link.id === 1 && !menu) {
                return null
              }
              return (
                <NavbarItems key={link.id} onClick={() => setMenu(false)}>
                  <Link to={link.link}>
                    {link.id === 1 ? "Home" : link.name}
                  </Link>
                </NavbarItems>
              )
            })
          }}
        />
      </NavbarItemContainer>
      <ToggleButton menu={menu} setMenu={setMenu} />
    </NavContainer>
  )
}
