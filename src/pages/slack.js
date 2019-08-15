import React, { useState } from "react"
import Layout from "../layout"

import SEO from "../components/seo"
import {
  Button,
  SlackFormContainer,
  EmailInput,
  Toast,
} from "../components/style"

export default function Slack() {
  const [email, setEmail] = useState("")
  const [submitToast, setSubmitToast] = useState(false)

  const requestInvite = () => {
    setSubmitToast(true)
    setTimeout(() => setEmail(""), 1000)
  }

  console.log(email)
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
