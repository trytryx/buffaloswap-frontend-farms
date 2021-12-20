import { Heading } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import React from 'react'
import { TranslateString } from 'utils/translateTextHelpers'
import InfoCard from './components/InfoCard'
import MetaMask from './components/MetaMask'
import Staking from './components/Staking'

const Chain: React.FC = () => {
  return (
    <Page>
      
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        BSC & Howto
      </Heading>
      <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        Buffalo Swap is on the Binance Smart Chain
      </Heading>
      <MetaMask/>
      <Staking/>
      
      <InfoCard/>

    </Page>
  )
}

export default Chain
