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

const InfoCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledFeatureCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          Using a Bridge: convert your Mainnet Coins to another Mainnet.
        </Heading>
        <>
           <Heading as="h1" size="md" mb="24px" color="primary">
              How to send your BNB or ETH to the BSC network ? Here is one way to do it quickly, using Orbit Bridge
            </Heading>
          <Text color="white"><b>1.</b> Visit Orbit Bridge: <a href="https://bridge.orbitchain.io/" target="_blank" rel="noreferrer">https://bridge.orbitchain.io</a></Text>
          <Text color="white">2. Switch your MetaMask to the desired network (eth or bsc)</Text>
          <Text color="white">3. Select the coin you want to transfer (ETH or BNB)</Text>
          <Text color="white">4. Select FROM Chain (eth/bsc) and TO CHAIN (bsc)</Text>
          <Text color="white">5. Fill your recipient address (can be the same one that you are using to send)</Text>
          <Text color="white">6. Click convert now.</Text>
          <Text color="white">&nbsp;</Text>

          <Heading as="h1" size="md" mb="24px" color="primary">Now that you have sent your ETH or BNB to the BSC...</Heading>
         
          <Text color="white">1. Switch your MetaMask to the BSC network</Text>
          <Text color="white">2. You can swap your tokens (ex: PBNB if you sent BNB ...)</Text>
          <Text color="white">3. Happy staking on Buffalo!</Text>
          
          <Text color="white">&nbsp;</Text>
          <Text color="white">There are many other Bridge, google it!  Zero Exchange, AutoFarm, Matic Network, ...</Text>
        

        </>
      </CardBody>
    </StyledFeatureCard>
  )
}

export default InfoCard
