import React, { useState } from "react"
import Layout from "../layout"
import styled from "styled-components"

import SEO from "../components/seo"
import Button from "../components/Button"

export default function Slack() {
  const [email, setEmail] = useState("")
  const [submitToast, setSubmitToast] = useState(false)

  const requestInvite = () => {
    setSubmitToast(true)
    setTimeout(() => setEmail(""), 1000)
  }

  const SlackFormContainer = styled.section`
    display: flex;
    background-color: #eee;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    padding: 2rem;
    border-radius: 0.5rem;

    h1 {
      text-align: center;
    }

    form {
      margin-bottom: 0;
    }
  `

  const EmailInput = styled.input`
    width: 320px;
    border: 1px solid #999;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    background-color: #fff;
    background-clip: padding-box;
    margin-bottom: 1rem;

    @media only screen and (max-width: 320px) {
      width: 240px;
    }
  `

  const Toast = styled.div`
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    text-align: center;
  `

  return (
    <Layout>
      <SEO title="Gatsby NYC's Slack Community" />
      {submitToast && (
        <Toast onClick={() => setSubmitToast(false)}>Invite sent!</Toast>
      )}
      <SlackFormContainer>
        <h1>Gatsby NYC's Slack Community</h1>
        <p>
          Our community is a welcoming space where any Gatsby, React,
          Javascript, JAMStack related question is fair game, be it beginner,
          intermediate, or advanced. We don't have all the answers, but we can
          find them as a team.
        </p>
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSevJbIBx8CFxtYjL7aR4sfIIUlroouHsYUqXK2AqEcD2NwvyQ/formResponse"
          method="post"
          target="_blank"
          onSubmit={requestInvite}
        >
          <EmailInput
            aria-label="Enter your email to be invited to Gatsy NYC's Slack channel."
            required
            autoComplete="email"
            name="emailAddress"
            placeholder="Your email"
            type="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <Button aria-label="Submit your email." type="submit">
            Invite Me!
          </Button>
        </form>
      </SlackFormContainer>
    </Layout>
  )
}
