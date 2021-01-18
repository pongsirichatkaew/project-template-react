import React from "react"
import "./layout.css"
import { GlobalStyles } from "../styles/GlobalStlyes"

import Header from "./Header"
function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
