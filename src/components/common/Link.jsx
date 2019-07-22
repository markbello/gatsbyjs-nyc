import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.purple};
  text-decoration: none;
`

StyledLink.propTypes = {
  theme: PropTypes.object, // from ThemeProvider
  to: PropTypes.string.isRequired,
}

export default StyledLink
