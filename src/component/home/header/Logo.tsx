import React from "react"
import styled from "styled-components"
import { normalize } from "styled-normalize"

const Container = styled.div`
  ${normalize}
  font-family: "Oddly Calming", sans-serif;
  font-size: 2rem;
  font-weight: bold;
`

function Logo() {
  return <Container>{"Shumin's portfolio"}</Container>
}

export default Logo
