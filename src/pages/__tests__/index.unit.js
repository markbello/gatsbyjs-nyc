import React from "react"
import TestMe from "../index"

describe("pages", () => {
  describe("index.js", () => {
    it("renders without crashing", () => {
      shallow(<TestMe />)
    })
  })
})
