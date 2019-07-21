import React from "react"
import GatsbyLogo from "../../components/GatsbyLogo"
import { Link } from "../../components/common"
import HeaderContainer from "./HeaderContainer"

const Header = () => (
  <HeaderContainer>
    <div style={{ margin: 0 }}>
      <Link to="/">
        <div style={{ maxWidth: "100px" }}>
          <GatsbyLogo />
        </div>
      </Link>
    </div>
  </HeaderContainer>
)

export default Header
