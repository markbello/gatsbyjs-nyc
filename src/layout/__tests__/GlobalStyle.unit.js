import React from "react"
import TestMe from "../GlobalStyle"

describe("components", () => {
  describe("GlobalStyle.jsx", () => {
    it("renders without crashing", () => {
      shallow(<TestMe />)
    })
  })
})
