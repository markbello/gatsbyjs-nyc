import styled from "styled-components"
import PropTypes from "prop-types"

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxContentWidth};
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

PageContainer.propTypes = {
  theme: PropTypes.object, // from Theme Provider
}

export default PageContainer
