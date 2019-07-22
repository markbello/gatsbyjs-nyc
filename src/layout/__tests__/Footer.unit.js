import React from "react"
import TestMe from "../Footer"

describe("components", () => {
  describe("Footer.jsx", () => {
    it("renders without crashing", () => {
      shallow(<TestMe />)
    })

    it("renders an appropriate semantic tag", () => {
      const wrapper = mount(<TestMe />)
      expect(wrapper.exists("footer")).toEqual(true)
    })
  })
})
