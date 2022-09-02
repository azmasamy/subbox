import SubscribeIcon from '../../assets/img/services/subscribe.png';
import App from '../../assets/img/services/app.png';
import Redeem from '../../assets/img/services/redeem.png';
import React from 'react';
import RollerIcon from '../../assets/svg/Services/RollerIcon';
import styled from 'styled-components';

// Assets

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case 'roller':
      getIcon = <RollerIcon />;
      break;
    case 'monitor':
      getIcon = <img src={SubscribeIcon} alt='subscribe' />;
      break;
    case 'browser':
      getIcon = <img src={Redeem} alt='redeem' />;
      break;
    case 'printer':
      getIcon = <img src={App} alt='app' />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className='flex flexColumn'>
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className='font20 extraBold'>{title}</TitleStyle>
      <SubtitleStyle className='font13'>{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
`;
const IconStyle = styled.div`
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
