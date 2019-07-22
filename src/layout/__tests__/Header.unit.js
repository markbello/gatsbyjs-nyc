import React from "react"
import TestMe from "../Header"

describe("components", () => {
  describe("Header.jsx", () => {
    it("renders without crashing", () => {
      shallow(<TestMe />)
    })
  })
})
