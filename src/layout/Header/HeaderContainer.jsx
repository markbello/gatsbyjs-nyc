import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container } from "../../components/common"

const HeaderContainer = ({ children }) => (
  <StyledHeader>
    <InnerContainer>{children}</InnerContainer>
  </StyledHeader>
)

const StyledHeader = styled(Container).attrs({ as: "header" })``

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxContentWidth};
  padding: 1.45rem 1.0875rem;
  // display: none; //remove this for production
`

HeaderContainer.propTypes = {
  children: PropTypes.node,
}

InnerContainer.propTypes = {
  theme: PropTypes.object, // from ThemeProvider
}

export default HeaderContainer
