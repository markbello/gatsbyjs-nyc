import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../src/theme"

export default function withTheme(children) {
  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  )
}
