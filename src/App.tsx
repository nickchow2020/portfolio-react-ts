import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import HomeHeader from "./component/home/header"

const Container = styled.div`
  ${normalize}
  width:100;
  height: 80px;
  background-color: #042d63;
`

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Oddly Calming';
    src: url('./assets/fonts/OddlyCalmingDEMO.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`

import "./App.css"
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HomeHeader />
      </Container>
    </>
  )
}

export default App
