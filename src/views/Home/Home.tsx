import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './swip.css'


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import FeatureCard from './components/FeatureCard'
import TokenInfoCard from './components/TokenInfoCard'

import BannerCard from './components/BannerCard'
import AdsCard from './components/AdsCard'

import BannerCard2 from './components/BannerCard2'


const Hero = styled.div`
  align-items: center;
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  
  text-align: center;
  display: inline;
  padding-inline-end: inherit;

  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  SwiperCore.use([Autoplay,Pagination,Navigation]);
  return (
    <>
    
     <Hero>
      <Swiper
      pagination
      autoplay={{ delay: 6000 }}
      speed={2000}
      navigation
      >
      <SwiperSlide><img src="/images/banners/muft_2400x400.jpg" alt="buff"/></SwiperSlide>  
      <SwiperSlide><a href="https://buffaloswap.org/games" rel="noreferrer"><img src="/images/banners/treasure_2400x400.jpg" alt="buff"/></a></SwiperSlide>
      <SwiperSlide><img src="/images/banners/bbq_2400x400.jpg" alt="buff"/></SwiperSlide>
      
    </Swiper>
    </Hero>
  

    <Page>
      { /*  <Hero> */ }
      { /*   <BannerCard /> */ }
      { /*  </Hero> */ }
      { /* <div  > */ }
      { /*   <BannerCard2 /> */ }
      { /* </div> */ }
      <div>
        <Cards>
        {/* <AdsCard /> */}
          <FeatureCard />
          
          <FarmStakingCard />
     	    <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
          <TokenInfoCard />
        </Cards>
      </div>
    </Page>
    </>
  )
}

export default Home
