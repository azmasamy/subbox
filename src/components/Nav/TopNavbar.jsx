import React, { useCallback, useEffect, useState } from 'react';
import { accountBalance, logout as destroy, login } from '../../utils/near';

import Backdrop from '../Elements/Backdrop';
import BurgerIcon from '../../assets/svg/BurgerIcon';
import { Link } from 'react-scroll';
import Sidebar from '../Nav/Sidebar';
import styled from 'styled-components';

export default function TopNavbar({ account }) {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  // const account = window.walletConnection.account();
  const [balance, setBalance] = useState('0');

  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  }, [account]);

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.scrollY));
    return () => {
      window.removeEventListener('scroll', () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        account={account}
      />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className='flexCenter animate whiteBg'
        style={y > 100 ? { height: '60px' } : { height: '80px' }}>
        <NavInner className='container flexSpaceCenter'>
          <Link className='pointer flexNullCenter' to='home' smooth={true}>
            <h1 style={{ marginLeft: '15px' }} className='font30 extraBold'>
              SubBox
            </h1>
          </Link>
          <BurderWrapper
            className='pointer'
            onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className='flexNullCenter'>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: '10px 15px' }}
                to='home'
                spy={true}
                smooth={true}
                offset={-80}>
                Home
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: '10px 15px' }}
                to='how-it-works'
                spy={true}
                smooth={true}
                offset={-80}>
                How It Works
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: '10px 15px' }}
                to='create-cert'
                spy={true}
                smooth={true}
                offset={-80}>
                Avialable Offers
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className='flexCenter'>
            <li className='semiBold font15'>
              <p href='/' style={{ padding: '10px 30px 10px 0' }}>
                {account.accountId
                  ? `${account.accountId} - ${balance} NEAR`
                  : ''}
              </p>
            </li>
            <li
              className='semiBold font15 pointer flexCenter'
              style={{ maxWidth: '20ch' }}>
              <button
                onClick={!account.accountId ? login : destroy}
                className='radius8 lightBg pointer'
                style={{
                  padding: '10px 15px',
                  font: 'inherit',
                  marginTop: '0',
                }}>
                {!account.accountId ? 'Log In with NEAR' : 'Log Out'}
              </button>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 950px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 950px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 950px) {
    display: none;
  }
`;
