import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../layout"
import Link from "../components/common/Link"

export default props => {
  const post = props.data.markdownRemark
  const nextPost = ((props.pageContext.next || {}).fields || {}).slug
  const prevPost = ((props.pageContext.previous || {}).fields || {}).slug
  const paginationPosition =
    Math.floor(props.pageContext.index / props.pageContext.postsPerPage) + 1
  const blogIndexPage =
    paginationPosition > 1 ? `/blog/${paginationPosition}` : `/blog/`

  return (
    <Layout>
      <BackStyles>
        <Link to={blogIndexPage}>Back to Blog</Link>
      </BackStyles>

      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <BlogNav>
        <Link to={prevPost} className={!prevPost && `disabled`}>
          {"<<"} Previous
        </Link>
        |
        <Link to={nextPost} className={!nextPost && `disabled`}>
          Next >>
        </Link>
      </BlogNav>
    </Layout>
  )
}

const BlogNav = styled.div`
  justify-content: space-evenly;
  margin: 2rem auto;
  display: flexbox;

  @media (max-width: 400) {
  }

  a {
    padding: 1em;
  }
  .disabled {
    display: none;
  }
`
const BackStyles = styled.div`
  text-align: right;
`

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
