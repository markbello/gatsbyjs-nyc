import React from "react"
import TestMe from "../404"

describe("pages", () => {
  describe("404.js", () => {
    it("renders without crashing", () => {
      shallow(<TestMe />)
    })
  })
})
