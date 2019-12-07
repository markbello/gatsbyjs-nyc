/* react */
import React from "react"
import styled from "styled-components"

/* components */
import Layout from "../layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home - Gatsby NYC" />
    <h1>
      Gatsby NYC Meetup
      <a
        href="https://github.com/markbello/gatsbyjs-nyc"
        rel="noopener noreferrer"
        style={{ margin: "0 0.5em", width: "0.5em", height: "0.5em" }}
      >
        <svg id="i-github" viewBox="0 0 64 64" width="0.5em" height="0.5em">
          <path
            strokeWidth="0"
            fill="black"
            d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"
          />
        </svg>
      </a>
    </h1>

    <p>
      Connect with modern web technology community members. Gatsby is an amazing
      website framework (Open Source) that builds performance into every website
      by leveraging the latest web tech: React, GraphQL, Guess.js and modern
      Javascript. Meet and mingle with the Gatsby community as you learn from
      speakers about the future of website technologies.
    </p>
    <p>
      <a href="https://www.meetup.com/Gatsby-NYC/">Our community</a> is a
      welcoming space where any Gatsby, React, Javascript, JAMStack related
      question is fair game, be it beginner, intermediate, or advanced. We don’t
      have all the answers, but we can find them as a team. Clone{" "}
      <a
        href="https://github.com/markbello/gatsbyjs-nyc"
        rel="noopener noreferrer"
      >
        our repo
      </a>
      , add features and subit a PR.
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
