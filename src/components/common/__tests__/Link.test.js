import React from "react"
import TestMe from "../Link"

describe("components", () => {
  describe("Link.jsx", () => {
    const to = "/mock-url"

    it("renders without crashing", () => {
      shallow(<TestMe to={to} />)
    })
  })
})
