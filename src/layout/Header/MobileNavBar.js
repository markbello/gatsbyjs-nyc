import React, { useState } from "react"
import GatsbyLogo from "../../components/GatsbyLogo"
import { Link } from "../../components/common"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import Button from "../../components/Button"

const LogoContainer = styled.div`
  width: 120px;
`

const MobileItems = styled.div`
  margin: 1rem auto 0;
`

const MobileNavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`

const MobileNavInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const MobileMenu = styled.div`
  display: ${props => props.display};
`

const MobileMenuItems = styled.div`
  width: 100%;
  text-align: right;
`

const bar = `width: 32px;
  height: 2px;
  background-color: rebeccapurple;
  margin: 6px 0;`

const MenuIconContainer = styled.div`
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
