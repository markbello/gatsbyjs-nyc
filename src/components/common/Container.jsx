import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div`
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.grey};
  margin-bottom: 1.45rem;
`

Container.propTypes = {
  theme: PropTypes.object, // from Theme Provider
}

export default Container
