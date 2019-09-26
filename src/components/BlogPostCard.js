/* react */
import React from "react"
import Link from "./common/Link"
import styled from "styled-components"
import theme from "../theme"

export default ({ post }) => (
  <Container theme={theme}>
    <BlogHeader>
      <h3>{post.title}</h3>
      <p>
        by {post.author} | {post.date}
      </p>
    </BlogHeader>
    <p>{post.blurb}</p>
    <Link to={post.slug}>Read More</Link>
  </Container>
)

const BlogHeader = styled.div`
  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 0.8em;
    line-height: 0.8em;
  }
`

const Container = styled.div`
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.grey};
  padding: 1.45rem 0;
`
