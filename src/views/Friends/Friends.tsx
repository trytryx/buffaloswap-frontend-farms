import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import React from 'react'
import { TranslateString } from 'utils/translateTextHelpers'

import styled from 'styled-components'
import BabySwap from './components/BabySwap'
import NFTmall from './components/NFTmall'
import TreasureKey from './components/TreasureKey'
import VDV from './components/VDV'
import Flat from './components/Flat'
import Pear from './components/Pear'
import Crox from './components/Crox'


const Hero = styled.div`
  align-items: center;
  /*background-image: url('/images/header.png');*/
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 32;
  padding-bottom: 32px;
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

const Friends: React.FC = () => {


  return (
    <Page>
       
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        Buffalo&apos;s Ranch
      </Heading>
      <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        Use BUFF to Play & Earn with our Partners!
      </Heading>
      <div>
        <Cards>
            <Crox/>
            <Pear/>
            <BabySwap/>
            <VDV/>
            <NFTmall/>
            <TreasureKey/>
            <Flat/>
            
        </Cards>
      </div>
    </Page>
  )
}

export default Friends
