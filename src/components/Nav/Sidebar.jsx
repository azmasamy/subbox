import React, { useCallback, useEffect, useState } from 'react';
import { accountBalance, logout as destroy, login } from '../../utils/near';

import CloseIcon from '../../assets/svg/CloseIcon';
import { Link } from 'react-scroll';
import styled from 'styled-components';

export default function Sidebar({ sidebarOpen, toggleSidebar, account }) {
  const [balance, setBalance] = useState('0');

  const getBalance = useCallback(async () => {
    if (account?.accountId) {
      setBalance(await accountBalance());
    }
  }, [account]);

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return (
    <Wrapper className='animate darkBg' sidebarOpen={sidebarOpen}>
      <SidebarHeader className='flexSpaceCenter'>
        <div className='flexNullCenter'>
          <h1 className='whiteColor font20' style={{ marginLeft: '15px' }}>
            SubBox
          </h1>
        </div>
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className='animate pointer'>
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className='flexNullCenter flexColumn'>
        <li className='semiBold font15 pointer'>
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass='active'
            className='whiteColor'
            style={{ padding: '10px 15px' }}
            to='home'
            spy={true}
            smooth={true}
            offset={-60}>
            Home
          </Link>
        </li>
        <li className='semiBold font15 pointer'>
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass='active'
            className='whiteColor'
            style={{ padding: '10px 15px' }}
            to='how-it-works'
            spy={true}
            smooth={true}
            offset={-60}>
            How it works
          </Link>
        </li>
        <li className='semiBold font15 pointer'>
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass='active'
            className='whiteColor'
            style={{ padding: '10px 15px' }}
            to='create-cert'
            spy={true}
            smooth={true}
            offset={-60}>
            Available Offers
          </Link>
        </li>
      </UlStyle>
      <UlStyle className='flexColumn flexCenter'>
        <li className='semiBold font25 textCenter'>
          <p href='/' style={{ color: 'white' }}>
            {account.accountId ? (
              <>
                {account.accountId}
                <br /> <br />
                {balance}
              </>
            ) : (
              ''
            )}
          </p>
        </li>
        <li className='semiBold font15 pointer flexCenter'>
          <button
            onClick={!account?.accountId ? login : destroy}
            className='radius8 lightBg pointer'
            style={{ padding: '10px 15px', font: 'inherit' }}>
            {!account?.accountId ? 'Log In with NEAR' : 'Log Out'}
          </button>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? '0px' : '-400px')};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
