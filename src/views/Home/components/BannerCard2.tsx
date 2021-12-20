import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'

const StyledBannerCard = styled(Card)`
  background-size: 100%,100%;
  background-repeat: no-repeat;
  background-position: top right;
  grid-column: span 12 / auto;
  min-height: 80;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 0px;
  padding-bottom: 32px;
  text-align: center;
  background-color: transparent;
  border: none;
  border-radius: 0px;
  box-shadow: none;
`
const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: start;
  margin-bottom: 8px;
`

const BannerCard2 = () => {
  return (
    <StyledBannerCard>
      <CardBody style={{ padding: '0px' }}>
        
        <Text>
        <a href="https://app.unicrypt.network/amm/pancake-v2/ilo/0x4852c9D5A7dDc03d4f7F293Caa2bB2B1D1a937B0" target="_blank" rel="noreferrer">
          <img src="/images/presale_header.png" alt="presale on unicrypt"/>
        </a>
        </Text>
        
    
       
         
  
      </CardBody>
    </StyledBannerCard>
  )
}

export default BannerCard2
