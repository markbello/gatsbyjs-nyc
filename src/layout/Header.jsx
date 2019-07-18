/* react */
import React from "react"
import PropTypes from "prop-types"

/* styling */
import styled from "styled-components"

/* components */
import Logo from "../components/logo"
import { Container, Link } from "../components/common"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <InnerContainer>
      <div style={{ margin: 0 }}>
        <Link to="/">
          <div style={{ maxWidth: "100px" }}>
            <Logo />
          </div>
        </Link>
      </div>
    </InnerContainer>
  </StyledHeader>
)

const StyledHeader = styled(Container).attrs({ as: "header" })``
const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxContentWidth};
  padding: 1.45rem 1.0875rem;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

InnerContainer.propTypes = {
  theme: PropTypes.object, // from ThemeProvider
}

export default Header
