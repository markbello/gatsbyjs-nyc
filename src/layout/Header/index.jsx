import React from "react"

import HeaderContainer from "./HeaderContainer"
import NavBar from "./NavBar"
import MobileNavBar from "./MobileNavBar"

export default function Header() {
  const mobile = window.innerWidth < 768

  return (
    <>
      <HeaderContainer>{mobile ? MobileNavBar() : NavBar}</HeaderContainer>
    </>
  )
}
