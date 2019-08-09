import React, { useState } from "react"
import GatsbyLogo from "../../components/GatsbyLogo"
import { Link } from "../../components/common"
import { StaticQuery, graphql } from "gatsby"

import {
  Button,
  LogoContainer,
  MobileItems,
  MobileNavContainer,
  MobileNavInnerContainer,
  MobileMenu,
  MobileMenuItems,
  bar,
  MenuIconContainer,
} from "../../components/style"

const MobileNavBar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <MobileNavContainer>
      <MobileNavInnerContainer>
        <Link to="/">
          <LogoContainer>
            <GatsbyLogo />
          </LogoContainer>
        </Link>
        <MenuIconContainer
          marginRight={!!menu ? "-6px" : ""}
          onClick={() => setMenu(!menu)}
        >
          <div className={!!menu ? "change-bar1" : "bar1"}></div>
          <div className={!!menu ? "change-bar2" : "bar2"}></div>
          <div className={!!menu ? "change-bar3" : "bar3"}></div>
        </MenuIconContainer>
      </MobileNavInnerContainer>
      <MobileMenu display={menu ? "flex" : "none"}>
        <MobileMenuItems>
          <StaticQuery
            query={graphql`
              query MobileTitleQuery {
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
                  <MobileItems key={link.id}>
                    <Link to={link.link}>{link.name}</Link>
                  </MobileItems>
                )
              })
            }}
          />
        </MobileMenuItems>
      </MobileMenu>
    </MobileNavContainer>
  )
}

export default MobileNavBar
