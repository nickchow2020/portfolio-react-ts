import React from "react"
import styled from "styled-components"
import { normalize } from "styled-normalize"
import Logo from "./Logo"
import NavigateTab from "./NavigateTab"

const Container = styled.div`
  ${normalize}
  width: 85%;
  margin: auto;
  background-color: orange;
  height: 100%;
  display: flex;
  justify-content: space between;
`

function index() {
  return (
    <Container>
      <Logo />
      <NavigateTab />
    </Container>
  )
}

export default index
