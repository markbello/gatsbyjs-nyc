import React from "react"
import TestMe from "../Container"

describe("components", () => {
  describe("Container.jsx", () => {
    it("renders without crashing", () => {
      shallow(<TestMe />)
    })
  })
})
