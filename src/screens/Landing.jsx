import AvailableProducts from '../components/Sections/Offers';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import React from 'react';
import Services from '../components/Sections/Services';
import TopNavbar from '../components/Nav/TopNavbar';

export default function Landing({ account }) {
  return (
    <>
      <TopNavbar account={account} />

      <Header />

      <Services />

      <AvailableProducts /> 

      <Footer />
    </>
  );
}
