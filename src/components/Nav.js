import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as VscIcons from 'react-icons/vsc'
import { IconContext } from 'react-icons/lib';

// const Nav = styled.div`
//   background: #000;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const NavIcon = styled(Link)`
  // margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #fff;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 800ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <header className='header'>
            <NavIcon to='#'>
              <VscIcons.VscWindow className='btn' onClick={showSidebar} />
            </NavIcon>
            {/* <h1 style={{}}>notion</h1> */}
        </header>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <VscIcons.VscChromeClose className='btn' onClick={showSidebar} />
            </NavIcon>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Nav;