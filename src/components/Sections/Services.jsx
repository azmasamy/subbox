import React from 'react';
import ServiceBox from '../Elements/ServiceBox';
import styled from 'styled-components';

export default function Services() {
  return (
    <Wrapper id='how-it-works'>
      <div className='whiteBg' style={{ padding: '3rem 0 4rem' }}>
        <div className='container'>
          <HeaderInfo>
            <h1 className='font40 extraBold'>How It Works</h1>
          </HeaderInfo>
          <ServiceBoxRow className='flex'>
            <ServiceBoxWrapper>
              <ServiceBox
                icon='roller'
                title='Login With NEAR'
                subtitle='First connect with a NEAR wallet to be able to subscribe to services and products.'
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon='monitor'
                title='Subscribe'
                subtitle='Subscribe monthly with a small fee to be able to redeem all kinds of amaizing products and services.'
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon='printer'
                title='Download The App'
                subtitle='Download Redeem mobile application available on Google Play and Apple Store.'
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon='browser'
                title='Redeem!'
                subtitle='Redeem amaizing products and services from brands you know and love by scanning a barcode.'
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  justify-content: space-evenly;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  text-align: center;
`;
