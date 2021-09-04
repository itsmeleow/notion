// import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavData } from "./NavData";

const Nav = () => {
  return (
    <>
        <Container>
          <Items>
            <Row>
              <Title>notion</Title>
            </Row>
            <div>
              {NavData.map((item, index) => {
                return (
                  <Page to={item.path} key={index}>{item.title}</Page>
                )
              })}
            </div>
          </Items>
        </Container>
    </>
  );
};


const Container = styled.nav`
  display: inline-block;
  box-sizing: border-box;
  flex-direction: column;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  border-right: 1px solid #21262d;
  height: 100vh;
  @media (max-width: 850px) {
    display: none;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(7px);
    z-index: 1;
    top: 65px;
    width: 100%;
    height: calc(100% - 65px);
}
`;

const Page = styled(Link)`
  color: #ccc;
  padding: 10px 0px;
  display: flex;
  &:hover {
    color: #fff;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  color: #fff;
  font-weight: 600;
  padding: 10px 0px;
`;


export default Nav;