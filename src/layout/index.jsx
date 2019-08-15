import React from "react"
import PropTypes from "prop-types"

/* styling */
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./GlobalStyle"
import PageContainer from "./PageContainer"
import theme from "../theme"

/* components */
import Header from "./Header"
import Footer from "./Footer"

const PureLayout = ({ children, ...rest }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header />
      <PageContainer {...rest}>
        <main>{children}</main>
        <Footer />
      </PageContainer>
    </>
  </ThemeProvider>
)

PureLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PureLayout
