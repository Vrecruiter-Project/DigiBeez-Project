import React from 'react';
import Herosection from '../../components/LandingPage/herosection/Herosection';
import Coursebrocher from '../../components/LandingPage/CourseBrocher/Coursebrocher';
import Navbar from '../../components/Navbar/Navbar';
import OurExperience from '../../components/LandingPage/OurExperience/OurExperience';
import PlacementBenefits from '../../components/LandingPage/PlacementBenefits/Placement';
import CourseBenefits from '../../components/LandingPage/CourseBenefits/Benefits';
import Trustlove from '../../components/LandingPage/Trust&Love/Trustlove'
import Learners from '../../components/LandingPage/Learners/Learners'
import Benefits from '../../components/LandingPage/beyondlearning/Benefits';
import PlansAndPricing from '../../components/LandingPage/Plans/Plans';
import RequestCall from '../../components/LandingPage/RequestCall/RequestCall';
import FAQ from '../../components/LandingPage/Faq/Faq';
import Footer from '../../components/LandingPage/Footer/Footer';

export default function Home() {

  const scrollToForm = () => {
    const formSection = document.getElementById('formSection');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar onButtonClick={scrollToForm}/>
      <Herosection />
      <Coursebrocher />
      <PlacementBenefits onButtonClick={scrollToForm} />
      <div className='bg-black'>
        <CourseBenefits />
        <Benefits />
        <Trustlove onButtonClick={scrollToForm} />
      </div>
      <Learners onButtonClick={scrollToForm} />
      <OurExperience onButtonClick={scrollToForm} />
      <PlansAndPricing />
      <RequestCall />
      <FAQ onButtonClick={scrollToForm} />
      <Footer />
    </>
  )
}
