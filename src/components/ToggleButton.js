import React from "react"

import { MenuIconContainer } from "./style"

export default function ToggleButton(props) {
  return (
    <MenuIconContainer
      backgroundColor={!!props.menu ? "#fff" : "rebeccapurple"}
      displayMenu={!!props.menu ? "fixed" : "block"}
    >
      <div onClick={() => props.setMenu(!props.menu)}>
        <div className={!!props.menu ? "bar change-bar1" : "bar"}></div>
        <div className={!!props.menu ? "bar change-bar2" : "bar"}></div>
        <div className={!!props.menu ? "bar change-bar3" : "bar"}></div>
      </div>
    </MenuIconContainer>
  )
}
