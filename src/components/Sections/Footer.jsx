import { Link } from 'react-scroll';
import React from 'react';
import styled from 'styled-components';

// Assets

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className='darkBg'>
        <div className='container'>
          <InnerWrapper
            className='flexSpaceCenter'
            style={{ padding: '30px 0' }}>
            <Link className='pointer flexNullCenter' to='home' smooth={true}>
              <h1
                style={{ marginLeft: '15px', color: 'white' }}
                className='font30 extraBold'>
                SubBox
              </h1>
            </Link>
            <StyleP className='whiteColor font15'>
              © {getCurrentYear()} - <span className='purpleColor'>SubBox</span>{' '}
              All Right Reserved
            </StyleP>

            <Link
              className='whiteColor animate pointer font13'
              to='home'
              smooth={true}
              offset={-80}>
              Back to top &#8593;
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
