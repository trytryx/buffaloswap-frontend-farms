import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text, Button,Flex } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'

const StyledAdsCard = styled(Card)`
  background-size: 95%,95%;
  background-image: url('/images/redbuff/full.png');
  background-repeat: no-repeat;
  background-position: center center;
  grid-column: span 12 / auto;
  min-height: 375;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 16px;
  padding-bottom: 32px;
  text-align: center;
  min-height: 340px;
  /* cursor: pointer; */

`

const AdsCard = () => {
  

  return (
    <StyledAdsCard>
       
      <CardBody>
      <Text>
      REDBUFF Presale ended!
      </Text>
      <Text>
      REDBUFF + BUFF = higher APR
      </Text>
      <Text>
      REDBUFF is coming!
      </Text>
      {/*  <a href="https://app.unicrypt.network/amm/pancake-v2/ilo/0x4852c9D5A7dDc03d4f7F293Caa2bB2B1D1a937B0" rel="noreferrer" target="_blank"> */}
      {/*  <div style={{width:'500px', height:'400px' }} /> */}
      {/*  </a> */}
        
      </CardBody>
      <Flex justifyContent="center" style={{marginTop: 'auto'}}>
        <Button as='a' href="https://app.unicrypt.network/amm/pancake-v2/ilo/0x2bdAD12C4D947eEdAa18b17365c0969CBb7438c0" external>CLAIM REDBUFF</Button>
      </Flex>
       
    </StyledAdsCard>
   
  )
}

export default AdsCard
