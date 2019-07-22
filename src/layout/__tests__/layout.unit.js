import React from "react"
import TestMe from "../../layout"

describe("components", () => {
  describe("layout/index.js", () => {
    it("renders without crashing", () => {
      shallow(
        <TestMe>
          <div />
        </TestMe>
      )
    })
  })
})
