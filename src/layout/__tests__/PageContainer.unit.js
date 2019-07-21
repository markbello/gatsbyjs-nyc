import React from "react"
import TestMe from "../PageContainer"

describe("components", () => {
  describe("PageContainer", () => {
    it("renders without crashing", () => {
      shallow(<TestMe />)
    })
  })
})
