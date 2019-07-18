import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home - Gatsby NYC" />
    <h1>Gatsby NYC Meetup</h1>
    <p>Connect with modern web technology community members. Gatsby is an amazing website framework (Open Source) that builds performance into every website by leveraging the latest web tech: React, GraphQL, Guess.js and modern Javascript. Meet and mingle with the Gatsby community as you learn from speakers about the future of website technologies.</p>
    <p>Our community is a welcoming space where any Gatsby, React, Javascript, JAMStack related question is fair game, be it beginner, intermediate, or advanced. We don’t have all the answers, but we can find them as a team.</p>
    <Link to={`/feature-requests`}>Feature Requests</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
