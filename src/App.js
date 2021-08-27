// import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import Notes from "../src/pages/Notes";
import Trash from "../src/pages/Trash";

function App() {
  return (
      <Wrapper>
      <MainContent>
        <Router>
          <Nav />
          <ContentWrapper>
            <Switch>
              <Route exact path='/notes' component={Notes} />
              <Route exact path='/trash' component={Trash} />
            </Switch>
          </ContentWrapper>
        </Router>
      </MainContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
  }
`;

const MainContent = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  margin-left: 15rem;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  a {
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 850px) {
    margin-left: 0px;
    padding-top: 65px;
  }
`;


export default App;