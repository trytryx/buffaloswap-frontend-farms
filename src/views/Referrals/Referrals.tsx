import { Heading } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import TickerBar from 'components/TickerBar'
import React from 'react'
import { TranslateString } from 'utils/translateTextHelpers'
import ReferralCard from './components/ReferralCard'
import FeatureCard from './components/FeatureCard'

const Referrals: React.FC = () => {
  return (
    <Page>
      
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        {
          TranslateString(10006, 'Referral Program')
        }
      </Heading>
      <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        Share the referral link below with your friends and earn 5% of your friend&#39;s!
      </Heading>
      <ReferralCard/>
      <FeatureCard/>

    </Page>
  )
}

export default Referrals
