/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/* react */
import React from "react"
import PropTypes from "prop-types"

/* state */
import { useStaticQuery, graphql } from "gatsby"

/* styling */
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import GlobalStyle from "./GlobalStyle"
import PageContainer from "./PageContainer"

/* components */
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <PageContainer>
          <main>{children}</main>
          <Footer />
        </PageContainer>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
