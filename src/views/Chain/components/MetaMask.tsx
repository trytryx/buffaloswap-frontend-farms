import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'


const StyledFeatureCard = styled(Card)`
  align-items: left;
  display: flex;
  flex: 1;
  margin-top: 32px;
`

const MetaMask = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledFeatureCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          Binance & BSC
        </Heading>
        <>
           <Heading as="h1" size="md" mb="24px" color="primary">
           How to setup MetaMask for the Binance Smart Chain        
          </Heading>
          <Text color="white"><b>1.</b> Click on the current network and scroll down to Custom RPC</Text>
          <Text color="white"><b>2.</b> Enter in the BSC Mainnet settings as follows:</Text>
          <Text color="white">&nbsp;&nbsp;&nbsp; * <b>Network Name:</b> Binance</Text>
          <Text color="white">&nbsp;&nbsp;&nbsp; * <b>New RPC URL:</b> https://bsc-dataseed.binance.org/</Text>
          <Text color="white">&nbsp;&nbsp;&nbsp; * <b>ChainID:</b> 56</Text>
          <Text color="white">&nbsp;&nbsp;&nbsp; * <b>Symbol:</b> BNB</Text>
          <Text color="white">&nbsp;&nbsp;&nbsp; * <b>Block Explorer URL:</b> https://bscscan.com</Text>

          <Text color="white">&nbsp;</Text>

          <Heading as="h1" size="md" mb="24px" color="primary">
          Binance Academy (worth read)
          </Heading>
          <Text color="white"><b>Connecting MetaMask: </b> <a href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" target="_blank" rel="noreferrer">https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain</a></Text>
          <Text color="white"><b>What is Binance Smart Chain: </b> <a href="https://academy.binance.com/en/articles/an-introduction-to-binance-smart-chain-bsc" target="_blank" rel="noreferrer">https://academy.binance.com/en/articles/an-introduction-to-binance-smart-chain-bsc</a></Text>
          <Text color="white"><b>BEP-20 / ERC-20: </b> <a href="https://academy.binance.com/en/glossary/bep-20" target="_blank" rel="noreferrer">https://academy.binance.com/en/glossary/bep-20</a></Text>
          
          <Text color="white">&nbsp;</Text>

          <Heading as="h1" size="md" mb="24px" color="primary">
          TrustWallet
          </Heading>
          <Text color="white">Same instructions can be applied to TrustWallet (or any other wallet).</Text>
          
        </>
      </CardBody>
    </StyledFeatureCard>
  )
}

export default MetaMask
