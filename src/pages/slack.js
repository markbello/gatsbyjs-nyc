import React, { useState } from "react"
import Layout from "../layout"
import "./slack.css"

import SEO from "../components/seo"

export default function Slack() {
  // HELPERS
  const [email, setEmail] = useState("")
  const [submitToast, setSubmitToast] = useState(false)

  const requestInvite = () => {
    setSubmitToast(true)
    // setTimeout for form to process before resetting state
    setTimeout(() => setEmail(""), 1000)
  }

  const displayToast = () => {
    return (
      <div id="toast" onClick={() => setSubmitToast(false)}>
        Invite sent!
      </div>
    )
  }
  // end HELPERS

  return (
    <Layout>
      <SEO title="Gatsby NYC's Slack Community" />
      {submitToast ? displayToast() : null}
      <div id="slack-form">
        <h1 style={{ textAlign: "center" }}>Gatsby NYC's Slack Community</h1>
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
          onSubmit={() => requestInvite()}
        >
          <input
            aria-label="Enter your email to be invited to Gatsy NYC's Slack channel."
            required
            autoComplete="email"
            name="emailAddress"
            placeholder="Your email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button aria-label="Submit your email." type="submit">
            Invite Me!
          </button>
        </form>
      </div>
    </Layout>
  )
}
