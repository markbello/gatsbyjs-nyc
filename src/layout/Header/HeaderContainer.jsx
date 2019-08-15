import React from "react"
import PropTypes from "prop-types"
import { StyledHeader, InnerContainer } from "../../components/style"

const HeaderContainer = ({ children }) => (
  <StyledHeader>
    <InnerContainer>{children}</InnerContainer>
  </StyledHeader>
)

HeaderContainer.propTypes = {
  children: PropTypes.node,
}

InnerContainer.propTypes = {
  theme: PropTypes.object, // from ThemeProvider
}

export default HeaderContainer
