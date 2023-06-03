import React from 'react'
import Banner from '../Banner/Banner'
import Business from '../Business/Business'
import LatestProject from '../LatestProject/LatestProject';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Question from '../../Question/Question';
import Tab from '../../Tab/Tab';

const Home = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <div>
        <Banner />
        <Tab />
        <Business />
        <LatestProject />
        <Question></Question>
    </div>
  )
}

export default Home