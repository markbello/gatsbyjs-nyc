import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      borderBottom: `1px solid #efefef`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `rebeccapurple`,
            textDecoration: `none`,
          }}
        >
          <div style={{ maxWidth: '100px' }}>
            <Logo />
          </div>
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
