import React from 'react';
import { login } from '../../utils/near';
import styled from 'styled-components';

const Login = () => {
  return (
    <Wrapper id='create-cert'>
      <div className='whiteBg' style={{ paddingBottom: '60px' }}>
        <div className='container'>
          <HeaderInfo>
            <h1 className='font40 extraBold'>Create Certificate</h1>
            <p className='font20' style={{ paddingTop: '1rem' }}>
              Please log in first to enable the editor
            </p>
            <button
              onClick={login}
              className='radius8 lightBg pointer'
              style={{
                marginTop: '2rem',
                padding: '10px 15px',
                font: 'inherit',
              }}>
              Log In with NEAR
            </button>
          </HeaderInfo>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  text-align: center;
`;
export default Login;
