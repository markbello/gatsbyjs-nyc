/* react */
import React from "react"
import styled from "styled-components"

/* GraphQL */
import { graphql } from "gatsby"

/* components */
import Layout from "../layout"
import SEO from "../components/seo"
import BlogPostCard from "../components/BlogPostCard"
import Link from "../components/common/Link"

export default props => {
  const blogPostCards = props.data.allMarkdownRemark.edges.map(edge => (
    <BlogPostCard
      post={{ ...edge.node.frontmatter, ...edge.node.fields }}
      key={edge.node.fields.slug}
    />
  ))

  const { currentPage, numPages } = props.pageContext
  const nextPage = currentPage + 1
  const prevPage = currentPage < 3 ? "" : currentPage - 1
  const nextDisabled = currentPage === numPages
  const prevDisabled = currentPage === 1

  return (
    <Layout>
      <SEO title="Blog - Gatsby NYC" />
      {blogPostCards.length ? (
        blogPostCards
      ) : (
        <h2>Come back soon for some exciting Gatsby content...</h2>
      )}
      <BottomNav>
        <Link to={`/blog/${prevPage}`} className={prevDisabled && "disabled"}>
          {"<<"} Previous
        </Link>
        <Link to={`/blog/${nextPage}`} className={nextDisabled && "disabled"}>
          Next >>
        </Link>
      </BottomNav>
    </Layout>
  )
}

const BottomNav = styled.div`
  margin-top: 3rem;
  text-align: center;

  .disabled {
    display: none;
  }
`

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/blog/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
            blurb
          }
        }
      }
    }
  }
`
