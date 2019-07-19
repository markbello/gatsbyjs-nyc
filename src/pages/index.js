/* react */
import React from "react"
import styled from "styled-components"

/* components */
import Layout from "../layout"
import Image from "../components/image"
import { Link } from "../components/common"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home - Gatsby NYC" />
    <h1>Gatsby NYC Meetup</h1>
    <p>
      Connect with modern web technology community members. Gatsby is an amazing
      website framework (Open Source) that builds performance into every website
      by leveraging the latest web tech: React, GraphQL, Guess.js and modern
      Javascript. Meet and mingle with the Gatsby community as you learn from
      speakers about the future of website technologies.
    </p>
    <p>
      Our community is a welcoming space where any Gatsby, React, Javascript,
      JAMStack related question is fair game, be it beginner, intermediate, or
      advanced. We don’t have all the answers, but we can find them as a team.
    </p>
    <p>
      <Link to={`/feature-requests`}>Feature Requests</Link> or{" "}
      <Link to="/slack">Join Our Slack</Link>
    </p>
    <ImageContainer>
      <Image />
    </ImageContainer>
  </Layout>
)

const ImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

export default IndexPage
