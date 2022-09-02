import '../../style/offers.css';
import styled from 'styled-components';
import offers from '../../assets/data.js';
import OfferCard from '../Elements/OfferCard';

const Offers = () => {
  return (
    <Wrapper id='create-cert'>
      <div
        className='whiteBg'
        style={{ paddingBottom: '4rem', textAlign: 'center' }}>
        <HeaderInfo>
          <h1 className='font40 extraBold' style={{ paddingBottom: '1rem' }}>
            Available Offers!
          </h1>
        </HeaderInfo>
        <div className='cards'>
          {offers.map((offer) => (
            <OfferCard offer={offer} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Offers;

const HeaderInfo = styled.div`
  text-align: center;
`;

const Wrapper = styled.section`
  width: 100%;
`;
